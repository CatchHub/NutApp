import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data-service';
import { HttpClient } from '@angular/common/http';
import { ExpertServicesService } from '../services/expert-services.service';
import { Profile } from '../models/profile.model';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  name!: string;
  selectedProfileID: any;
  public profiles: Array<Profile>;
  private profilesSub;
  constructor(
    private sharedDataService: SharedDataService,
    private http: HttpClient,
    private serverService: ExpertServicesService
  ) {
    this.sharedDataService.selectedProfileID.subscribe(
      (selectedID) => (this.selectedProfileID = selectedID)
    );
  }
}
