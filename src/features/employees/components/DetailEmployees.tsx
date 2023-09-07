import { ActionIcon, Flex, Skeleton, Stack } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { Employees } from '../model';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import { employeesService } from '../services/employeesService.ts';

type DetailEmployeesProps = {
  employee: Employees;
};

const mapping = [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Email',
    key: 'email',
  },
  {
    label: 'Phone',
    key: 'phone',
  },
  {
    label: 'Address',
    key: 'address',
  },
  {
    label: 'Position',
    key: 'position',
  },
  {
    label: 'Create At',
    key: 'createdAt',
  },
  {
    label: 'Update At',
    key: 'updatedAt',
  },
] as List<ItemInfo<keyof Employees>>;

export const DetailEmployees = ({ employee }: DetailEmployeesProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, data } = useRequest(
    () => employeesService.getEmployee(employee.id),
    {
      immediate: true,
    },
  );

  return (
    <>
      <ActionIcon color='green' onClick={open}>
        <IconEye size={16} />
      </ActionIcon>
      <ExtendModal
        opened={isOpen}
        onClose={close}
        title={`Detail [${employee?.name}]`}
      >
        {loading ? (
          <Stack w={'100%'}>
            <Skeleton height={12} mt={6} width='70%' radius='xl' />
            <Skeleton height={12} radius='xl' />
            <Skeleton height={12} mt={6} radius='xl' />
          </Stack>
        ) : (
          <Stack w={'100%'}>
            {mapping.map((item) => (
              <Flex key={item.label} justify={'space-between'}>
                <span style={{ fontWeight: 'bold' }}>{item.label}:</span>
                <span>{data[item.key]}</span>
              </Flex>
            ))}
          </Stack>
        )}
      </ExtendModal>
    </>
  );
};
