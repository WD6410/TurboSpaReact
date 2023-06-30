import { useRouteError } from 'react-router-dom';
import { InternalServerErrorResult } from './InternalServerErrorResult';
import { NotFoundResult } from './NotFoundResult';
import { InternalErrorResult } from './InternalErrorResult';

interface IProps {
  error?: any;
}

export function ErrorPageStrategy(props: IProps) {
  const routeError = useRouteError();

  const error = props.error ?? routeError;

  switch (error.status) {
    case 500:
      return <InternalServerErrorResult />;
    case 401:
      return null;
    case 403:
    case 404:
      return <NotFoundResult />;
    default:
      return <InternalErrorResult />;
  }
}
