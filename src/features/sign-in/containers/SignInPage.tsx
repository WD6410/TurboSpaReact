import styles from './SignInPageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';
import { SignInForm } from '../components';
import { InternalErrorResult } from 'shared/ErrorBoundary/result/InternalErrorResult';
import { signInService } from '../services/useSignInService';
import { handleLoginSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const classNames = classNamesFunc<keyof typeof styles>();
export function SignInPage() {
  const navigate = useNavigate();
  const handleSignIn = (data: any) => {
    signInService(data)
      .then((result) => {
        handleLoginSuccess(result);
        toast.success('Login Success');
        setTimeout(() => {
          navigate('/');
        }, 100);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className={classNames(styles['signIn-Page'])}>
      <div>
        <h1 className={classNames(styles['signIn-Page--title'])}>
          Welcome Turbo Application
        </h1>
        <SignInForm onSubmit={handleSignIn} />
      </div>
    </div>
  );
}
export const Component = SignInPage;

export const ErrorBoundary = () => {
  return <InternalErrorResult />;
};
