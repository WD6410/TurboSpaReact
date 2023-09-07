import { alovaInstance } from 'shared/config/apiConfig.ts';
import { endpointApi } from 'shared/config/constants.ts';
import queryString from 'query-string';
import { Employees, EmployeesModel } from 'features/employees/model';

export type CreateEmployeesRequest = Omit<
  Employees,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateEmployeesRequest = Pick<Employees, 'name'>;

export const employeesService = {
  getEmployeesList: (query: IBaseQuery) => {
    return alovaInstance.Get(
      `${endpointApi.employees}?${queryString.stringify(query)}`,
      {
        transformData: (res: IBaseResponse<List<Employees>>) => {
          return {
            ...res,
            data: res.data.map((item) => new EmployeesModel(item)),
          };
        },
      },
    );
  },
  getEmployees: (id: string) => {
    return alovaInstance.Get(`${endpointApi.employees}/${id}`, {
      transformData: (data: Employees) => {
        return new EmployeesModel(data);
      },
    });
  },
  createEmployees: (data: CreateEmployeesRequest) => {
    return alovaInstance.Post(endpointApi.employees, data);
  },
  updateEmployees: (id: string, data: UpdateEmployeesRequest) => {
    return alovaInstance.Put(`${endpointApi.employees}/${id}`, data);
  },
  deleteEmployees: (id: string) => {
    return alovaInstance.Delete(`${endpointApi.employees}/${id}`);
  },
};
