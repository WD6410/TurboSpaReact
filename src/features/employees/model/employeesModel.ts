import { appUtils } from 'shared/utils';

export interface Employees {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  position: string;
  createdAt: string;
  updatedAt: string;
}

export class EmployeesModel implements Employees {
  address: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  position: string;
  createdAt: string;
  updatedAt: string;

  constructor(_employees: Employees) {
    this.id = _employees.id;
    this.name = _employees.name;
    this.email = _employees.email;
    this.phone = _employees.phone;
    this.address = _employees.address;
    this.position = _employees.position;
    this.createdAt = appUtils.formatDate(_employees.createdAt);
    this.updatedAt = appUtils.formatDate(_employees.updatedAt);
  }
}
