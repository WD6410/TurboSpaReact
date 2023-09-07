import { appUtils } from 'shared/utils';

export interface Products {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class ProductsModel implements Products {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  constructor(_products: Products) {
    this.id = _products.id;
    this.name = _products.name;
    this.createdAt = appUtils.formatDate(_products.createdAt);
    this.updatedAt = appUtils.formatDate(_products.updatedAt);
  }
}
