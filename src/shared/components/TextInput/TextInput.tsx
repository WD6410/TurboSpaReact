import { classNamesFunc } from 'classnames-generics';

import styles from './TextInput.module.scss';
import { InputHTMLAttributes } from 'react';

const classNames = classNamesFunc<keyof typeof styles>();

type ITextInputProps = InputHTMLAttributes<HTMLInputElement>;

export default function TextInput(props: ITextInputProps) {
  return (
    <div className={classNames(styles['text-input'])}>
      <input
        className={classNames(
          styles['text-input--container'],
          styles['text-input--container-outlined'],
        )}
        {...props}
      />
    </div>
  );
}
