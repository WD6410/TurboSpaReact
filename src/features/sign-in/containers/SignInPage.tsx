import styles from './SignInPageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';
import { SignInForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/ErrorBoundary';
import { useRequest } from 'alova';
import {
  siginInApi,
  whoamiApi,
} from 'features/sign-in/services/signInService.ts';
import { useAuthStore } from 'shared/store';

const classNames = classNamesFunc<keyof typeof styles>();
export function SignInPage() {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const { loading, send: sendSignIn } = useRequest(siginInApi, {
    immediate: false,
  });

  const { send: sendWhoami, loading: loadingWhoami } = useRequest(whoamiApi, {
    immediate: false,
  });

  const handleSignIn = async (data: any) => {
    try {
      const resultSignIn = await sendSignIn(data);
      const whoami = await sendWhoami();
      setToken(resultSignIn.token);
      setUser(whoami);
      navigate('/');
    } catch (_error) {
      console.log(_error);
    }
  };

  return (
    <div className={classNames(styles['signIn-Page'])}>
      <div>
        <h1 className={classNames(styles['signIn-Page--title'])}>
          Welcome Turbo Application
        </h1>
        <SignInForm
          isLoading={loading || loadingWhoami}
          onSubmit={handleSignIn}
        />
      </div>
    </div>
  );
}
export const Component = SignInPage;

export const ErrorBoundary = ErrorPageStrategy;
