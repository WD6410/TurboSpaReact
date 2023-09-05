import { classNamesFunc } from 'classnames-generics';

import styles from './Network.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface INetworkProps {
  [x: string]: any;
  // declare props here
}

export function NetworkPage(_props: INetworkProps) {
  return (
    <div className={classNames(styles['network'])}>
      Network
      <h1>Network</h1>
    </div>
  );
}

export const Component = NetworkPage;
