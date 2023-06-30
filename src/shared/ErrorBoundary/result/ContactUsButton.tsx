import { Button, ButtonProps } from '@chakra-ui/react';

type IProps = ButtonProps;

const ContactUsButton = (props: IProps) => {
  return <Button {...props}>Contact us!</Button>;
};

export { ContactUsButton };
