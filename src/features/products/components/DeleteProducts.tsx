import { ActionIcon, Button } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { Products } from 'features/products/model';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import { productsService } from '../services/productsService.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';

type DeleteProductsProps = {
  data: Products;
  onSuccess: () => void;
};

export const DeleteProducts = ({ data, onSuccess }: DeleteProductsProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: deleteApi } = useRequest(
    (id) => productsService.deleteProducts(id),
    { immediate: false },
  );

  const handleDelete = () => {
    deleteApi(data?.id)
      .then(() => {
        close();
        onSuccess();
        notifications.show({
          message: 'Delete success!',
          color: 'green',
        });
      })
      .catch((error) => {
        notifications.show({
          message: get(
            error,
            'message',
            'Something went wrong, please try again later!',
          ),
          color: 'red',
        });
      });
  };

  return (
    <>
      <ActionIcon color='red' onClick={open}>
        <IconTrash size={16} />
      </ActionIcon>
      <ExtendModal
        opened={isOpen}
        onClose={close}
        title={`Delete ${data?.name}`}
      >
        <Button disabled={loading} onClick={handleDelete} color='red'>
          OK
        </Button>
      </ExtendModal>
    </>
  );
};
