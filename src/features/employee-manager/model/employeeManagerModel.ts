export interface EmployeeManager {
  [x: string]: any;
  // declare model here
}

export class EmployeeManagerModel implements EmployeeManager {
  constructor(_employeeManager: EmployeeManager) {
    // initialize model here
  }
}
