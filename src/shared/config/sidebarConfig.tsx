import {
  IconAlertCircle,
  IconDatabase,
  IconGitPullRequest,
  IconMessages,
} from '@tabler/icons-react';

export const sideBarConfig = [
  {
    icon: <IconGitPullRequest size='1rem' />,
    color: 'blue',
    label: 'Pull Requests',
    path: '/pull-requests',
  },
  {
    icon: <IconAlertCircle size='1rem' />,
    color: 'teal',
    label: 'Open Issues',
    path: '/open-issues',
  },
  {
    icon: <IconMessages size='1rem' />,
    color: 'violet',
    label: 'Discussions',
    path: '/discussions',
  },
  {
    icon: <IconDatabase size='1rem' />,
    color: 'grape',
    label: 'Databases',
    path: '/databases',
  },
];
