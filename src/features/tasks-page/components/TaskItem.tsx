import { Anchor, Avatar, Badge, Card, Flex, Stack, Text } from '@mantine/core';
import { TaskModel } from '../model';

type TaskItemProps = {
  task: TaskModel;
};

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <Card
      shadow='xs'
      radius='sm'
      sx={() => ({
        borderLeft: `1px solid ${task.getColorByStatus()}`,
        cursor: 'pointer',
      })}
    >
      <Card.Section p={'sm'}>
        <Flex>
          <Stack sx={{ flex: 1 }}>
            <Anchor>NET-{task.getNetID()}</Anchor>
            <Text lineClamp={2}>{task.title}</Text>
          </Stack>
          <Avatar src={task.authorUrl} alt={task.author} radius={'xl'} />
        </Flex>
      </Card.Section>
      <Badge
        bg={task.getColorByStatus()}
        sx={{ color: 'white' }}
        variant='light'
      >
        {task.status}
      </Badge>
      <Stack spacing={'none'} mt={'xs'}>
        <Text weight={500} fz={'14px'}>
          {status}
        </Text>
        <Text weight={500} fz={'14px'}>
          {task.author}
        </Text>
      </Stack>
    </Card>
  );
}
