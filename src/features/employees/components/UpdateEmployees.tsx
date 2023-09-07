import {
  ActionIcon,
  Box,
  Button,
  Group,
  Select,
  TextInput,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  employeesService,
  UpdateEmployeesRequest,
} from '../services/employeesService.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';
import { mockPosition } from 'shared/mock/mockEmployees.ts';
import { Employees } from '../model';

type UpdateEmployeesProps = {
  onSuccess: () => void;
  employee: Employees;
};

export const UpdateEmployees = ({
  onSuccess,
  employee,
}: UpdateEmployeesProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: updateApi } = useRequest(
    (payload) => employeesService.updateEmployee(employee.id, payload),
    { immediate: false },
  );

  const updateForm = useForm<UpdateEmployeesRequest>({
    initialValues: {
      name: '',
      address: '',
      position: '',
    },

    validate: {
      name: (value) => (value.length ? null : 'name not empty'),
      address: (value) => (value.length ? null : 'address not empty'),
      position: (value) => (value.length ? null : 'position not empty'),
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
              'Đã có lỗi sảy ra, vui lòng thử lại sau!',
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
      name: employee.name,
      address: employee.address,
      position: employee.position,
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
        title={`Update employee ${employee.name}`}
      >
        <Box mx='auto' w={'100%'}>
          <form onSubmit={handleUpdate}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='enter name'
              {...updateForm.getInputProps('name')}
            />

            <TextInput
              withAsterisk
              label='Address'
              placeholder='enter address'
              {...updateForm.getInputProps('address')}
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
              {...updateForm.getInputProps('position')}
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
