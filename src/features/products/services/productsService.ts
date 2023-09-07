import { alovaInstance } from 'shared/config/apiConfig.ts';
import { endpointApi } from 'shared/config/constants.ts';
import queryString from 'query-string';
import { Products, ProductsModel } from 'features/products/model';

export type CreateProductsRequest = Omit<
  Products,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateProductsRequest = Pick<Products, 'name'>;

export const productsService = {
  getProductsList: (query: IBaseQuery) => {
    return alovaInstance.Get(
      `${endpointApi.products}?${queryString.stringify(query)}`,
      {
        transformData: (res: IBaseResponse<List<Products>>) => {
          return {
            ...res,
            data: res.data.map((item) => new ProductsModel(item)),
          };
        },
      },
    );
  },
  getProducts: (id: string) => {
    return alovaInstance.Get(`${endpointApi.products}/${id}`, {
      transformData: (data: Products) => {
        return new ProductsModel(data);
      },
    });
  },
  createProducts: (data: CreateProductsRequest) => {
    return alovaInstance.Post(endpointApi.products, data);
  },
  updateProducts: (id: string, data: UpdateProductsRequest) => {
    return alovaInstance.Put(`${endpointApi.products}/${id}`, data);
  },
  deleteProducts: (id: string) => {
    return alovaInstance.Delete(`${endpointApi.products}/${id}`);
  },
};
