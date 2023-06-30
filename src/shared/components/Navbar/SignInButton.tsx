import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const SignInButton = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return null;
  }

  return (
    <Button fontWeight={400} variant='link' as={Link} to='/sign-in'>
      Sign In
    </Button>
  );
};
