import { ActionIcon, Flex, Skeleton, Stack } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { Products } from '../model';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import { productsService } from '../services/productsService.ts';

type DetailProductsProps = {
  data: Products;
};

const mapping = [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Create At',
    key: 'createdAt',
  },
  {
    label: 'Update At',
    key: 'updatedAt',
  },
] as List<ItemInfo<keyof Products>>;

export const DetailProducts = ({ data }: DetailProductsProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, data: detail } = useRequest(
    () => productsService.getProducts(data?.id),
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
        title={`Detail [${data?.name}]`}
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
                <span style={{ fontWeight: 'bold' }}>{item?.label}:</span>
                <span>{detail?.[item?.key]}</span>
              </Flex>
            ))}
          </Stack>
        )}
      </ExtendModal>
    </>
  );
};
