import styles from './SignInPageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';
import { SignInForm } from '../components';
import { handleLoginSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/ErrorBoundary';
import { useRequest } from 'alova';
import { siginInApi } from 'features/sign-in/services/signInService.ts';

const classNames = classNamesFunc<keyof typeof styles>();
export function SignInPage() {
  const navigate = useNavigate();
  const { loading, send } = useRequest(siginInApi, {
    immediate: false,
  });
  const handleSignIn = (data: any) => {
    send(data)
      .then((result) => {
        console.log('result', result);
        handleLoginSuccess(result);
        setTimeout(() => {
          navigate('/');
        }, 100);
      })
      .catch((_error) => {
        console.log(_error);
      });
  };

  return (
    <div className={classNames(styles['signIn-Page'])}>
      <div>
        <h1 className={classNames(styles['signIn-Page--title'])}>
          Welcome Turbo Application
        </h1>
        <SignInForm isLoading={loading} onSubmit={handleSignIn} />
      </div>
    </div>
  );
}
export const Component = SignInPage;

export const ErrorBoundary = ErrorPageStrategy;
