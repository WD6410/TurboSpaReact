import { classNamesFunc } from 'classnames-generics';
import { Button, TextInput } from 'shared/components';

import styles from './SignInForm.module.scss';
const classNames = classNamesFunc<keyof typeof styles>();

export default function SignInForm() {
  return (
    <div className={classNames(styles['signIn-Form'])}>
      <TextInput placeholder='Username' />
      <TextInput
        style={{
          marginTop: '16px',
        }}
        placeholder='Password'
      />
      <Button
        style={{
          marginTop: '16px',
        }}
      >
        Sign In
      </Button>
    </div>
  );
}
