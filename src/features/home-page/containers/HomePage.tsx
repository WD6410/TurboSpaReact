import { InternalErrorResult } from 'shared/ErrorBoundary/result/InternalErrorResult';

export function HomePage() {
  return <div>Home</div>;
}

export const Component = HomePage;

export const ErrorBoundary = () => {
  return <InternalErrorResult />;
};
