import { useRouteError } from 'react-router-dom';
import { NotFoundResult } from './NotFoundResult.tsx';
import { InternalServerErrorResult } from './InternalServerErrorResult.tsx';

interface IProps {
  error?: any;
}

export function ErrorPageStrategy(props: IProps) {
  const routeError = useRouteError();
  console.log('routeError', routeError, props);

  const error = props.error ?? routeError;

  switch (error.status) {
    case 401:
      return null;
    case 403:
    case 404:
      return <NotFoundResult />;
    case 500:
    default:
      return <InternalServerErrorResult />;
  }
}
