import { chakra } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from 'shared/components';

export function AuthLayout() {
  return (
    <chakra.main>
      <Navbar />
      <chakra.div pt={{ base: 20, md: 24 }} pb={{ base: 4, md: 6 }}>
        <Outlet />
      </chakra.div>
      <Footer />
    </chakra.main>
  );
}
