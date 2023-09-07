import { Box, Button, Group, Select, TextInput } from '@mantine/core';
import { IconAt, IconPlus } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  CreateEmployeesRequest,
  employeesService,
} from '../services/employeesService.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';
import { mockPosition } from 'shared/mock/mockEmployees.ts';
import validator from 'validator';

type CreateEmployeesProps = {
  onSuccess: () => void;
};

export const CreateEmployees = ({ onSuccess }: CreateEmployeesProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: createApi } = useRequest(
    (payload) => employeesService.createEmployee(payload),
    { immediate: false },
  );

  const createForm = useForm<CreateEmployeesRequest>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      position: '',
    },

    validate: {
      name: (value) => (value.length ? null : 'name not empty'),
      email: (value) =>
        value.length
          ? validator.isEmail(value)
            ? null
            : 'Email not valid'
          : 'email not empty',
      phone: (value) =>
        value.length
          ? validator.isMobilePhone(value, 'vi-VN')
            ? null
            : 'Phone number not valid'
          : 'phone not empty',
      address: (value) => (value.length ? null : 'address not empty'),
      position: (value) => (value.length ? null : 'position not empty'),
    },
  });

  const handleCreate = (e: any) => {
    createForm.onSubmit((values) => {
      createApi(values)
        .then(() => {
          notifications.show({
            message: 'Create success!',
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
              'Đã có lỗi sảy ra, vui lòng thử lại sau!',
            ),
            color: 'red',
          });
        })
        .finally(() => {
          close();
          createForm.reset();
        });
    })(e);
  };

  return (
    <Box>
      <Button fullWidth leftIcon={<IconPlus />} onClick={open}>
        Create
      </Button>
      <ExtendModal
        opened={isOpen}
        onClose={() => {
          close();
          createForm.reset();
        }}
        title={'Create new employee'}
      >
        <Box mx='auto' w={'100%'}>
          <form onSubmit={handleCreate}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='enter name'
              {...createForm.getInputProps('name')}
            />

            <TextInput
              withAsterisk
              icon={<IconAt />}
              label='Email'
              placeholder='enter email'
              {...createForm.getInputProps('email')}
            />

            <TextInput
              placeholder='09828247422'
              label='Phone number'
              withAsterisk
              {...createForm.getInputProps('phone')}
            />

            <TextInput
              withAsterisk
              label='Address'
              placeholder='enter address'
              {...createForm.getInputProps('address')}
            />

            <Select
              withAsterisk
              label='Postion'
              placeholder='Select postion'
              data={Object.entries(mockPosition).map(([key, value]) => ({
                value: key,
                label: value,
              }))}
              withinPortal
              {...createForm.getInputProps('position')}
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
