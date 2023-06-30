import { classNamesFunc } from 'classnames-generics';
import { Button, TextInput } from 'shared/components';

import styles from './SignInForm.module.scss';
import { useState } from 'react';

const classNames = classNamesFunc<keyof typeof styles>();

type SignInFormProps = {
  onSubmit: (values: any) => void;
};

export default function SignInForm({ onSubmit }: SignInFormProps) {
  const [form, setForm] = useState({
    username: '',
    pw: '',
  });
  return (
    <div className={classNames(styles['signIn-Form'])}>
      <TextInput
        placeholder='Username'
        value={form.username}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            username: e.target.value,
          }))
        }
      />
      <TextInput
        style={{
          marginTop: '16px',
        }}
        placeholder='Password'
        value={form.pw}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            pw: e.target.value,
          }))
        }
      />
      <Button
        style={{
          marginTop: '16px',
        }}
        onClick={() => onSubmit(form)}
      >
        Sign In
      </Button>
    </div>
  );
}
