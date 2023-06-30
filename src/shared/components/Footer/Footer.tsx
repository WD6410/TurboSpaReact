import { classNamesFunc } from 'classnames-generics';

import styles from './Footer.module.scss';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import { ListHeader } from './ListHeader';

const classNames = classNamesFunc<keyof typeof styles>();

// interface IFooterProps {
//   [x: string]: any;
//   // declare props here
// }

export default function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const color = useColorModeValue('gray.700', 'gray.200');
  return (
    <div className={classNames(styles['footer'])}>
      <Box bg={bg} color={color}>
        <Container as={Stack} maxW='1340px' py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
            spacing={8}
          >
            <Stack spacing={3}>
              <Box>
                <Logo />
              </Box>
              <Text fontSize='sm'>
                © {new Date().getFullYear()} E-commerce Demo. All rights
                reserved
              </Text>
            </Stack>
            <Stack align='flex-start'>
              <ListHeader>Products</ListHeader>
              <Link href={'#'}>Overview</Link>
              <Link href={'#'}>Features</Link>
              <Link href={'#'}>Tutorials</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align='flex-start'>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align='flex-start'>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Status</Link>
            </Stack>
            <Stack align='flex-start'>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
