import { Button, ButtonProps } from '@chakra-ui/react';

type IProps = ButtonProps;

export const RestFiltersButton = (props: IProps) => {
  return <Button {...props}>Reset filters</Button>;
};
