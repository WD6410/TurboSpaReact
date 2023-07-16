import { classNamesFunc } from 'classnames-generics';
import styles from './MainLink.module.scss';
import type { ReactNode } from 'react';
import { Group, Loader, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { NavLink } from 'react-router-dom';

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
                    ? theme.colors.indigo[9]
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

export type MainLinkProps = {
  links: IMainLinkProps[];
};

export default function MainLink({ links }: MainLinkProps) {
  const content = links.map((link) => (
    <MainLinkItem {...link} key={link.label} />
  ));
  return <div>{content}</div>;
}
