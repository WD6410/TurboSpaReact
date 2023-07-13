import { Result } from 'shared/ErrorBoundary/Result.tsx';
import { IconServerOff } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const InternalServerErrorResult = () => {
  const navigate = useNavigate();
  return (
    <Result
      image={<IconServerOff size={48} color={'red'} />}
      heading={'Something went seriously wrong'}
      subheading={
        'It sounds like something unexpected happened right now. Please, inform our support team about this issue ASAP!'
      }
    >
      <Button onClick={() => navigate('/')} color='red'>
        Go home
      </Button>
    </Result>
  );
};
