import { ActionIcon, Box, Button, Group, TextInput } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  UpdateProductsRequest,
  productsService,
} from '../services/productsService.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';
import { Products } from '../model';

type UpdateProductsProps = {
  onSuccess: () => void;
  data: Products;
};

export const UpdateProducts = ({ onSuccess, data }: UpdateProductsProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: updateApi } = useRequest(
    (payload) => productsService.updateProducts(data.id, payload),
    { immediate: false },
  );

  const updateForm = useForm<UpdateProductsRequest>({
    initialValues: {
      name: '',
    },

    validate: {
      name: (value) => (value.length ? null : 'name not empty'),
    },
  });

  const handleUpdate = (e: any) => {
    updateForm.onSubmit((values) => {
      updateApi(values)
        .then(() => {
          notifications.show({
            message: 'Update success!',
            color: 'green',
          });
          onSuccess();
        })
        .catch((error) => {
          console.log('error', error);
          notifications.show({
            message: get(
              error,
              'message',
              'Something went wrong, please try again later!',
            ),
            color: 'red',
          });
        })
        .finally(() => {
          close();
          updateForm.reset();
        });
    })(e);
  };

  const handleOpen = () => {
    updateForm.setValues({
      name: data.name,
    });
    open();
  };

  return (
    <Box>
      <ActionIcon color='blue' onClick={handleOpen}>
        <IconEdit size={16} />
      </ActionIcon>
      <ExtendModal
        opened={isOpen}
        onClose={() => {
          close();
          updateForm.reset();
        }}
        title={`Update employee ${data.name}`}
      >
        <Box mx='auto' w={'100%'}>
          <form onSubmit={handleUpdate}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='enter name'
              {...updateForm.getInputProps('name')}
            />

            <Group position='right' mt='md'>
              <Button disabled={loading} type='submit'>
                Submit
              </Button>
            </Group>
          </form>
        </Box>
      </ExtendModal>
    </Box>
  );
};
