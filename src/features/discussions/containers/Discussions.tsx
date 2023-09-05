import { classNamesFunc } from 'classnames-generics';

import styles from './Discussions.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface IDiscussionsProps {
  [x: string]: any;
  // declare props here
}

export function DiscussionsPage(_props: IDiscussionsProps) {
  return (
    <div className={classNames(styles['discussions'])}>
      Discussions
      <h1>Discussions</h1>
    </div>
  );
}

export const Component = DiscussionsPage;
