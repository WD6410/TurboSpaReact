import { ReactNode } from 'react';

import { ButtonGroup } from '@chakra-ui/react';

import { Result } from './Result';
import { ErrorIcon } from './ErrorIcon';
import { ContactUsButton } from './ContactUsButton';

interface IProps {
  children?: ReactNode;
}

export const InternalErrorResult = ({ children }: IProps) => {
  return (
    <Result
      image={<ErrorIcon />}
      heading={'Something went wrong'}
      subheading={
        "It sounds like something unexpected happened right now. Please, give it a try later or, if it's urgent, contact our support team."
      }
    >
      <ButtonGroup>
        <ContactUsButton />
        {children}
      </ButtonGroup>
    </Result>
  );
};
