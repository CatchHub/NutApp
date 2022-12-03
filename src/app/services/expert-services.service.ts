import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ExpertServicesService {
  private profiles: Array<Profile> = [];
  private profilesSubject: Subject<Array<Profile>>;
  constructor(private http: HttpClient) {
    this.profilesSubject = new Subject<Array<Profile>>();
  }

  getUserInfo() {
    this.http.get('http://localhost:3000/getUserInfo').subscribe((response) => {
      response['users'].forEach((el) => {
        this.profiles.push(el);
        this.profilesSubject.next(this.profiles);
      });
    });
  }

  postUserInfo(profile) {
    this.http
      .post('http://localhost:3000/postUserInfo', profile)
      .subscribe((response) => {
        console.log('Post Response: ' + response);
      });
  }
  getProfileSub() {
    return this.profilesSubject;
  }
}
