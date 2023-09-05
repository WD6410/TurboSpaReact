export interface ShopManager {
  [x: string]: any;
  // declare model here
}

export class ShopManagerModel implements ShopManager {
  constructor(_shopManager: ShopManager) {
    // initialize model here
  }
}
