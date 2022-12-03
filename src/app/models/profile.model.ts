export class Profile {
  name: string;
  weight: number;
  height: number;
  gender: string;
  age: number;
  activityLevel: string;
  diseases: Array<boolean> = [false, false, false, false, false, false, false];

  constructor(
    name: string,
    weight: number,
    height: number,
    gender: string,
    age: number,
    activityLevel: string,
    diseases: Array<boolean>
  ) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.gender = gender;
    this.age = age;
    this.activityLevel = activityLevel;
    diseases.forEach((element, index) => {
      this.diseases[index] = element;
    });
  }
}
