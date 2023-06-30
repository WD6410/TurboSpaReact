import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const ListHeader = ({ children }: PropsWithChildren) => {
  return (
    <Text fontWeight='500' fontSize='lg' mb={2}>
      {children}
    </Text>
  );
};
