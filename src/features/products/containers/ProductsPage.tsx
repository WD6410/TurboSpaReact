import { classNamesFunc } from 'classnames-generics';
import styles from './Products.module.scss';
import { usePagination } from '@alova/scene-react';
import { productsService } from '../services/productsService.ts';
import { DataTable } from 'mantine-datatable';
import { ActionIcon, Flex, Group, Input } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { Seo } from 'shared/components';
import { useInputState } from '@mantine/hooks';
import {
  CreateProducts,
  DeleteProducts,
  DetailProducts,
  UpdateProducts,
} from '../components';

const classNames = classNamesFunc<keyof typeof styles>();

interface IProductsProps {
  [x: string]: any;
  // declare props here
}

export function ProductsPage(_props: IProductsProps) {
  const [query, setQuery] = useInputState('');

  const {
    loading,
    data,
    page: [page, setPage],
    total,
    refresh,
  } = usePagination(
    (page, pageSize) =>
      productsService.getProductsList({ page, pageSize, q: query }),
    {
      watchingStates: [query],
      debounce: 1000,
      initialPage: 1,
      initialPageSize: 10,
      total: (res) => res.total,
      data: (res) => res.data,
      initialData: {
        page: 1,
        pageSize: 10,
        total: 0,
        data: [],
      },
    },
  );

  return (
    <div className={classNames(styles['products'])}>
      Products
      <Seo
        title={'Products'}
        description='Page generate for Products'
        type='preview'
      />
      <h1>Products</h1>
      <Flex
        gap={10}
        sx={{
          paddingBottom: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Input
          icon={<IconSearch />}
          rightSection={
            query && (
              <ActionIcon onClick={() => setQuery('')}>
                <IconX size={16} />
              </ActionIcon>
            )
          }
          placeholder='Search ...'
          radius='md'
          size='sm'
          value={query}
          onChange={setQuery}
        />

        <CreateProducts onSuccess={() => refresh(1)} />
      </Flex>
      <DataTable
        withBorder
        borderRadius='md'
        withColumnBorders
        striped
        minHeight={150}
        loaderVariant='oval'
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPage={10}
        totalRecords={total}
        highlightOnHover
        fetching={loading}
        records={data}
        columns={[
          {
            accessor: 'index',
            title: '#',
            textAlignment: 'right',
            width: 40,
            render: (record) => data.indexOf(record) + 1,
          },
          { accessor: 'name' },
          { accessor: 'createdAt' },
          { accessor: 'updatedAt' },
          {
            accessor: 'Actions',
            textAlignment: 'right',
            render: (data) => (
              <Group spacing={4} position='right' noWrap>
                <DetailProducts data={data} />
                <UpdateProducts data={data} onSuccess={() => refresh(1)} />
                <DeleteProducts data={data} onSuccess={() => refresh(1)} />
              </Group>
            ),
          },
        ]}
      />
    </div>
  );
}

export const Component = ProductsPage;
