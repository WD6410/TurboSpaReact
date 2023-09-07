import { appUtils } from 'shared/utils';

export interface Employees {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class EmployeesModel implements Employees {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  constructor(_employees: Employees) {
    this.id = _employees.id;
    this.name = _employees.name;
    this.createdAt = appUtils.formatDate(_employees.createdAt);
    this.updatedAt = appUtils.formatDate(_employees.updatedAt);
  }
}
