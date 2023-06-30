import { ReactNode } from 'react';

import { ButtonGroup } from '@chakra-ui/react';
import { WarningIcon } from './WarningIcon';
import { RestFiltersButton } from './ResetFiltersButton';
import { Result } from './Result';

interface IProps {
  children?: ReactNode;
}

export const EmptyStateResult = ({ children }: IProps) => {
  return (
    <Result
      image={<WarningIcon />}
      heading={'No results found'}
      subheading={'Unfortunately, there is nothing for you here yet!'}
    >
      <ButtonGroup>
        <RestFiltersButton />
        {children}
      </ButtonGroup>
    </Result>
  );
};
