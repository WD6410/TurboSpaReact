import { classNamesFunc } from 'classnames-generics';

import styles from './EmployeeManager.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface IEmployeeManagerProps {
  [x: string]: any;
  // declare props here
}

export function EmployeeManagerPage(_props: IEmployeeManagerProps) {
  return (
    <div className={classNames(styles['employee-manager'])}>
      EmployeeManager
      <h1>EmployeeManager</h1>
    </div>
  );
}

export const Component = EmployeeManagerPage;
