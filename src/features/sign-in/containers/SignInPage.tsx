import styles from './SignInPageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';
import { SignInForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/error-boundary';
import { useRequest } from 'alova';
import { signInApi } from 'features/sign-in/services/signInService.ts';
import { useAuthStore } from 'shared/store';
import { notifications } from '@mantine/notifications';
import _ from 'lodash-es';
import { pathRouter } from 'shared/config/pathRouter';

const classNames = classNamesFunc<keyof typeof styles>();
export function SignInPage() {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuthStore();
  const { loading, send: sendSignIn } = useRequest(signInApi, {
    immediate: false,
  });

  const handleSignIn = async (data: any) => {
    try {
      const resultSignIn = await sendSignIn(data);
      setToken(resultSignIn.token);
      setUser(resultSignIn.user);
      navigate(pathRouter.HomePage);
    } catch (error) {
      notifications.show({
        message: _.get(
          error,
          'message',
          '[sign-in]: Đã có lỗi sảy ra, vui lòng thử lại sau!',
        ),
        color: 'red',
      });
    }
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
