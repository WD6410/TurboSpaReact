import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const isAuthenticated = false;
  const logout = () => Promise.resolve(null);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button
      fontWeight={400}
      variant='link'
      onClick={() => logout().then(() => navigate('/'))}
    >
      Logout
    </Button>
  );
};
