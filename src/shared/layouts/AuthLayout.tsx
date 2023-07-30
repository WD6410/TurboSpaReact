import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import {
  ActionIcon,
  AppShell,
  Flex,
  Group,
  Header,
  Menu,
  Navbar,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { AppAffix, Logo, MainLink, User } from 'shared/components';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { EnglishIcon, VietnamIcon } from 'assets';
import { useAuthStore } from 'shared/store';
import { pathRouter } from 'shared/config/pathRouter.ts';

export function AuthLayout() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { isAuthentication } = useAuthStore();

  const onChangeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  if (!isAuthentication) {
    return <Navigate to={pathRouter.SignIn} />;
  }
  return (
    <AppShell
      padding='md'
      fixed={true}
      navbar={
        <Navbar width={{ base: 300 }} p='xs'>
          <Navbar.Section grow mt='xs'>
            <MainLink />
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: '100%' }} px={20} position='apart'>
            <Logo onClick={() => navigate('/')} colorScheme={colorScheme} />
            <Stack sx={{ flexDirection: 'row' }}>
              <Menu shadow='md'>
                <Menu.Target>
                  <ActionIcon variant='default' size={30}>
                    <Text size={'sm'} sx={{ textTransform: 'uppercase' }}>
                      {i18n.language}
                    </Text>
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => onChangeLanguage('vi')}
                    sx={{ alignItems: 'center' }}
                  >
                    <Flex gap={'sm'} align={'center'} justify={'center'}>
                      <VietnamIcon width={20} height={20} />
                      Việt nam
                    </Flex>
                  </Menu.Item>
                  <Menu.Item onClick={() => onChangeLanguage('en')}>
                    <Flex gap={'sm'} align={'center'} justify={'center'}>
                      <EnglishIcon width={20} height={20} />
                      English
                    </Flex>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <ActionIcon
                variant='default'
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === 'dark' ? (
                  <IconSun size='1rem' />
                ) : (
                  <IconMoonStars size='1rem' />
                )}
              </ActionIcon>
            </Stack>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Outlet />
      <AppAffix />
    </AppShell>
  );
}
