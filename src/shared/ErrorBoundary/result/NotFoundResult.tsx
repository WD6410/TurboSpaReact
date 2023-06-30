import { ReactNode } from 'react';
import { ButtonGroup } from '@chakra-ui/react';
import { Result } from './Result';
import { WarningIcon } from './WarningIcon';
import { ContactUsButton } from './ContactUsButton';

interface IProps {
  children?: ReactNode;
}

export const NotFoundResult = ({ children }: IProps) => {
  return (
    <Result
      image={<WarningIcon />}
      heading={"Page doesn't exist"}
      subheading={
        'Probably you got here by accident. If you think there is something wrong on our side, please contact us!'
      }
    >
      <ButtonGroup>
        <ContactUsButton />
        {children}
      </ButtonGroup>
    </Result>
  );
};
