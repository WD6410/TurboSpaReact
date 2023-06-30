import { Button } from '@chakra-ui/react';

export const SignUpButton = () => {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return null;
  }

  return (
    <Button display={{ base: 'none', md: 'inline-flex' }} colorScheme='orange'>
      Sign Up
    </Button>
  );
};
