import { ReactNode } from 'react';

import { ButtonGroup } from '@chakra-ui/react';

import { Result } from './Result';
import { ErrorIcon } from './ErrorIcon';
import { ContactUsButton } from './ContactUsButton';

interface IProps {
  children?: ReactNode;
}

export const InternalServerErrorResult = ({ children }: IProps) => {
  return (
    <Result
      image={<ErrorIcon />}
      heading={'Something went seriously wrong'}
      subheading={
        'It sounds like something unexpected happened right now. Please, inform our support team about this issue ASAP!'
      }
    >
      <ButtonGroup>
        <ContactUsButton />
        {children}
      </ButtonGroup>
    </Result>
  );
};
