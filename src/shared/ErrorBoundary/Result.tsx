import { ReactNode } from 'react';
import { Stack, Text, Title } from '@mantine/core';

interface IProps {
  image: ReactNode;
  heading: string;
  subheading: string;
  children: ReactNode;
}

export const Result = ({ children, heading, image, subheading }: IProps) => {
  return (
    <Stack
      spacing={'md'}
      align={'center'}
      justify={'center'}
      sx={{ height: 'inherit' }}
    >
      {image}
      <Stack
        spacing={'md'}
        align={'center'}
        justify={'center'}
        sx={{
          flexDirection: 'column',
        }}
      >
        <Title order={1}>{heading}</Title>
        <Text>{subheading}</Text>
      </Stack>
      {children}
    </Stack>
  );
};
