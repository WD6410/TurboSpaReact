export interface Profile {
  [x: string]: any;
  // declare model here
}

export class ProfileModel implements Profile {
  constructor(_profile: Profile) {
    // initialize model here
  }
}
