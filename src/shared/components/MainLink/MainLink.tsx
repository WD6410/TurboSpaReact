import { classNamesFunc } from 'classnames-generics';
import {
  IconAlertCircle,
  IconDatabase,
  IconGitPullRequest,
  IconMessages,
} from '@tabler/icons-react';
import styles from './MainLink.module.scss';
import type { ReactNode } from 'react';
import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';

const classNames = classNamesFunc<keyof typeof styles>();

interface IMainLinkProps {
  icon: ReactNode;
  color: string;
  label: string;
}

const data = [
  {
    icon: <IconGitPullRequest size='1rem' />,
    color: 'blue',
    label: 'Pull Requests',
  },
  {
    icon: <IconAlertCircle size='1rem' />,
    color: 'teal',
    label: 'Open Issues',
  },
  { icon: <IconMessages size='1rem' />, color: 'violet', label: 'Discussions' },
  { icon: <IconDatabase size='1rem' />, color: 'grape', label: 'Databases' },
];

function MainLinkItem({ icon, color, label }: IMainLinkProps) {
  return (
    <div className={classNames(styles['main-link'])}>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant='light'>
            {icon}
          </ThemeIcon>

          <Text size='sm'>{label}</Text>
        </Group>
      </UnstyledButton>
    </div>
  );
}

export default function MainLink() {
  const links = data.map((link) => <MainLinkItem {...link} key={link.label} />);
  return <div>{links}</div>;
}
