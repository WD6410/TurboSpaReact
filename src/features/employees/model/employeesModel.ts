export interface Employees {
  [x: string]: any;
  // declare model here
}

export class EmployeesModel implements Employees {
  constructor(_employees: Employees) {
    // initialize model here
  }
}
