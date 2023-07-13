import type { LoaderFunctionArgs } from 'react-router-dom';

export async function homeLoader(_props: LoaderFunctionArgs) {
  // throw new Response('Not Found', { status: 500 });
  return {};
}
