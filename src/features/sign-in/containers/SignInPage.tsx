import { alovaInstance } from 'shared/config/apiConfig';
import { useRequest } from 'alova';
import styles from './SignInPageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';
import { SignInForm } from '../components';
import { InternalErrorResult } from 'shared/ErrorBoundary/result/InternalErrorResult';

const classNames = classNamesFunc<keyof typeof styles>();
export function SignInPage() {
  const { data, loading, error } = useRequest(() => alovaInstance.Get('/me'), {
    initialData: null,
    immediate: false,
  });
  console.log(data, loading, error);

  return (
    <div className={classNames(styles['signIn-Page'])}>
      <div>
        <h1 className={classNames(styles['signIn-Page--title'])}>
          Welcome Turbo Application
        </h1>
        <SignInForm />
      </div>
    </div>
  );
}
export const Component = SignInPage;

export const ErrorBoundary = () => {
  return <InternalErrorResult />;
};
