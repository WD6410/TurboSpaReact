import { Grid, Stack } from '@mantine/core';
import { TaskModel, TaskStatus } from '../model';
import TaskItem from './TaskItem';

type TaskListProps = {
  data: Record<TaskStatus, TaskModel[]>;
};

export default function TaskList({ data }: TaskListProps) {
  return (
    <Grid mt={'md'}>
      {Object.entries(data).map(([key, value]) => (
        <Grid.Col span={3} key={key}>
          <Stack>
            {value.map((task, index) => (
              <TaskItem key={`${task.id}_${index}`} task={task} />
            ))}
          </Stack>
        </Grid.Col>
      ))}
    </Grid>
  );
}
