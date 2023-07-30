import { Box, Grid, Text } from '@mantine/core';
import type { GridProps } from '@mantine/core';

type TaskHeaderProps = Omit<GridProps, 'children'>;

export default function TaskHeader(props: TaskHeaderProps) {
  return (
    <Grid {...props}>
      <Grid.Col span={3}>
        <Box>
          <Text fz={'sm'} fw={'bold'}>
            TODO
          </Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box>
          <Text fz={'sm'} fw={'bold'}>
            IN PROGRESS
          </Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box>
          <Text fz={'sm'} fw={'bold'}>
            TESTING
          </Text>
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Box>
          <Text fz={'sm'} fw={'bold'}>
            DONE
          </Text>
        </Box>
      </Grid.Col>
    </Grid>
  );
}
