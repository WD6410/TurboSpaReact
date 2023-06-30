import { classNamesFunc } from 'classnames-generics';

import styles from './Navbar.module.scss';
import {
  Box,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { DesktopNav } from './DesktopNav';
import { LoaderBar } from './LoaderBar';
import { MobileNav } from './MobileNav';
import { Link } from 'react-router-dom';
import { SignInButton } from './SignInButton';
import { LogoutButton } from './LogoutButton';
import { ToggleModeButton } from './ToggleModeButton';
import { SignUpButton } from './SignUpButton';

const classNames = classNamesFunc<keyof typeof styles>();

// interface INavbarProps {
//   [x: string]: any;
//   // declare props here
// }

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <div className={classNames(styles['navbar'])}>
      <Box w='100%' position='fixed' zIndex='10'>
        <Flex
          w='100%'
          minH='60px'
          py={2}
          px={4}
          borderBottom={1}
          borderStyle='solid'
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align='center'
          bg={bg}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant='ghost'
              aria-label='Toggle Navigation'
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              as={Link}
              to='/'
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontWeight='extrabold'
            >
              Logo
            </Text>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <HStack direction={'row'} spacing={4}>
            <SignInButton />
            <SignUpButton />
            <LogoutButton />
            <ToggleModeButton />
          </HStack>
        </Flex>
        <LoaderBar />
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  );
}
