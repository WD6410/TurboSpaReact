import { classNamesFunc } from 'classnames-generics';
import styles from './MainLink.module.scss';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { Group, Loader, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import {
  IconListDetails,
  IconMessages,
  IconTemplate,
  IconUsers,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { pathRouter } from 'shared/config/pathRouter.ts';

const classNames = classNamesFunc<keyof typeof styles>();

export interface IMainLinkProps {
  icon: ReactNode;
  color: string;
  label: string;
  path: string;
}

function MainLinkItem({ icon, color, label, path }: IMainLinkProps) {
  return (
    <div className={classNames(styles['main-link'])}>
      <NavLink to={path} style={{ textDecoration: 'none' }}>
        {({ isActive, isPending }) =>
          isPending ? (
            <UnstyledButton
              sx={(theme) => ({
                alignItems: 'center',
                padding: theme.spacing.sm,
                borderRadius: theme.radius.sm,
              })}
            >
              <Loader variant='oval' color='gray' size='xs' />
            </UnstyledButton>
          ) : (
            <UnstyledButton
              sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[0]
                    : theme.black,

                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                },
                backgroundColor: isActive
                  ? theme.colorScheme === 'dark'
                    ? theme.colors.gray[9]
                    : theme.colors.indigo[0]
                  : 'none',
              })}
            >
              <Group>
                <ThemeIcon color={color} variant='light'>
                  {icon}
                </ThemeIcon>

                <Text size='sm'>{label}</Text>
              </Group>
            </UnstyledButton>
          )
        }
      </NavLink>
    </div>
  );
}

export default function MainLink() {
  const { t } = useTranslation(['sidebar']);
  const links = useMemo(
    () => [
      {
        icon: <IconListDetails size='1rem' />,
        color: 'blue',
        label: t('tasks'),
        path: pathRouter.TasksPage,
      },
      {
        icon: <IconUsers size='1rem' />,
        color: 'teal',
        label: t('employees'),
        path: pathRouter.EmployeesPage,
      },
      {
        icon: <IconMessages size='1rem' />,
        color: 'violet',
        label: t('discussions'),
        path: pathRouter.DiscussionsPage,
      },
      {
        icon: <IconTemplate size='1rem' />,
        color: 'grape',
        label: t('templates'),
        path: pathRouter.TemplatesPage,
      },
    ],
    [t],
  );

  return (
    <div>
      {links.map((link) => (
        <MainLinkItem {...link} key={link.label} />
      ))}
    </div>
  );
}
