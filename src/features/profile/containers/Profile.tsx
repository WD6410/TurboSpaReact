import { classNamesFunc } from 'classnames-generics';

import styles from './Profile.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface IProfileProps {
  [x: string]: any;
  // declare props here
}

export function ProfilePage(_props: IProfileProps) {
  return (
    <div className={classNames(styles['profile'])}>
      Profile
      <h1>Profile</h1>
    </div>
  );
}

export const Component = ProfilePage;
