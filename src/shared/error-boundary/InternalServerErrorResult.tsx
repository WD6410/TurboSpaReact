import { Result } from 'shared/error-boundary/Result';
import { IconServerOff } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';

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
      <Button onClick={() => navigate(pathRouter.Home)} color='red'>
        Go home
      </Button>
    </Result>
  );
};
