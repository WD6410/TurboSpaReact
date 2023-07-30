import { Seo } from 'shared/components';
import { Box, createStyles, ScrollArea } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TaskModel } from '../model';
import { TaskHeader, TaskList } from '../components';
import _ from 'lodash-es';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
    zIndex: 1,

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

export function TasksPage() {
  const { t } = useTranslation(['sidebar']);
  const [scrolled, setScrolled] = useState(false);
  const { classes, cx } = useStyles();
  const tasks = useLoaderData() as TaskModel[];

  return (
    <Box>
      <Seo
        title={t('sidebar:tasks')}
        description='A template code react common and reuse <3'
        type='preview'
      />
      <TaskHeader
        className={cx(classes.header, { [classes.scrolled]: scrolled })}
      />

      <ScrollArea
        h={900}
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        type={'never'}
      >
        <TaskList data={_.groupBy(tasks, 'status') as any} />
      </ScrollArea>
    </Box>
  );
}

export const Component = TasksPage;
