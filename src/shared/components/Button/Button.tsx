import { classNamesFunc } from 'classnames-generics';

import styles from './Button.module.scss';
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';

const classNames = classNamesFunc<keyof typeof styles>();

type IButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button(props: PropsWithChildren<IButtonProps>) {
  return (
    <button className={classNames(styles['button'])} {...props}>
      {props.children}
    </button>
  );
}
