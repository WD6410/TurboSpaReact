import type { ModalProps } from '@mantine/core';
import { createStyles, Modal, rem } from '@mantine/core';

const useStyles = createStyles((_theme) => ({
  root: {},
  inner: {},
  content: {},
  header: {},
  overlay: {},
  title: {
    fontWeight: 'bold',
    fontSize: rem(20),
    textAlign: 'center',
  },
  body: {
    justifyContent: 'center',
    display: 'flex',
  },
  close: {},
}));

export default function ExtendModal({ children, ...rest }: ModalProps) {
  const { classes } = useStyles();
  return (
    <Modal classNames={classes} size={'md'} centered {...rest}>
      {children}
    </Modal>
  );
}
