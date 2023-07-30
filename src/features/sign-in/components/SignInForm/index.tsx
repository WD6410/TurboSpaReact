import { classNamesFunc } from 'classnames-generics';

import styles from './SignInForm.module.scss';
import { useForm } from '@mantine/form';
import { Box, Button, Group, TextInput } from '@mantine/core';
import { AuthSignInRequest } from 'features/sign-in/services/signInService';
import { regexEmail } from 'shared/config/constants';

const classNames = classNamesFunc<keyof typeof styles>();

type SignInFormProps = {
  onSubmit: (values: AuthSignInRequest) => void;
  isLoading: boolean;
};

export default function SignInForm({ onSubmit, isLoading }: SignInFormProps) {
  const form = useForm({
    initialValues: {
      email: 'truongdq.dev@gmail.com',
      password: '123456789',
    },

    validate: {
      email: (value) => (regexEmail.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length >= 8 ? null : 'Min length is 8 characters',
    },
  });
  return (
    <div className={classNames(styles['signIn-Form'])}>
      <Box maw={300} mx='auto'>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <TextInput
            withAsterisk
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />

          <TextInput
            withAsterisk
            label='Password'
            placeholder='*********'
            {...form.getInputProps('password')}
          />

          <Group position='right' mt='md'>
            <Button loading={isLoading} type='submit'>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}
