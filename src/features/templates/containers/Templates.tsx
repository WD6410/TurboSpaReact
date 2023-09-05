import { classNamesFunc } from 'classnames-generics';

import styles from './Templates.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface ITemplatesProps {
  [x: string]: any;
  // declare props here
}

export function TemplatesPage(_props: ITemplatesProps) {
  return (
    <div className={classNames(styles['templates'])}>
      Templates
      <h1>Templates</h1>
    </div>
  );
}

export const Component = TemplatesPage;
