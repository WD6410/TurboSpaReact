export interface Network {
  [x: string]: any;
  // declare model here
}

export class NetworkModel implements Network {
  constructor(_network: Network) {
    // initialize model here
  }
}
