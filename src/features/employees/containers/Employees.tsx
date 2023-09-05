import { classNamesFunc } from 'classnames-generics';

import styles from './Employees.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface IEmployeesProps {
  [x: string]: any;
  // declare props here
}

export function EmployeesPage(_props: IEmployeesProps) {
  return (
    <div className={classNames(styles['employees'])}>
      Employees
      <h1>Employees</h1>
    </div>
  );
}

export const Component = EmployeesPage;
