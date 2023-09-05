import { classNamesFunc } from 'classnames-generics';

import styles from './ShopManager.module.scss';

const classNames = classNamesFunc<keyof typeof styles>();

interface IShopManagerProps {
  [x: string]: any;
  // declare props here
}

export function ShopManagerPage(_props: IShopManagerProps) {
  return (
    <div className={classNames(styles['shop-manager'])}>
      ShopManager
      <h1>ShopManager</h1>
    </div>
  );
}

export const Component = ShopManagerPage;
