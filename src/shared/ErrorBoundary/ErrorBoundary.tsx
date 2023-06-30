import { ComponentType, ReactNode } from 'react';
import { ErrorBoundary as Boundary } from 'react-error-boundary';
import { ErrorPageStrategy } from './result/ErrorPageStrategy';

export interface FallbackProps<ErrorType> {
  error: ErrorType;
}

export type ErrorFallback<ErrorType> = ComponentType<FallbackProps<ErrorType>>;

interface ErrorBoundaryProps<ErrorType> {
  onReset?: () => void;
  onError?: (
    error: Error,
    info: {
      componentStack: string;
    },
  ) => void;
  fallback?: ErrorFallback<ErrorType> | React.ReactElement<any, any>;
  resetKeys?: Array<any>;
}

export interface IErrorBoundaryProps<ErrorType>
  extends ErrorBoundaryProps<ErrorType> {
  children: ReactNode;
}

export function ErrorBoundary<ErrorType extends Error>({
  fallback,
  children,
  ...props
}: IErrorBoundaryProps<ErrorType>) {
  console.log('fallback', fallback);

  return (
    <Boundary
      FallbackComponent={(fallback as any) ?? ErrorPageStrategy}
      {...props}
    >
      {children}
    </Boundary>
  );
}
