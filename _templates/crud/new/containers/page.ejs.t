---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/containers/<%=name%>Page.tsx
sh: npx prettier --write src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/containers/<%=name%>Page.tsx
---

import { classNamesFunc } from 'classnames-generics';
import styles from './<%=name%>.module.scss';
import { usePagination } from '@alova/scene-react';
import { <%= h.inflection.camelize(name, true) %>Service } from '../services/<%= h.inflection.camelize(name, true) %>Service.ts';
import { DataTable } from 'mantine-datatable';
import { ActionIcon, Flex, Group, Input } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { Seo } from 'shared/components';
import { useInputState } from '@mantine/hooks';
import {
  Create<%= h.inflection.camelize(name) %>,
  Delete<%= h.inflection.camelize(name) %>,
  Detail<%= h.inflection.camelize(name) %>,
  Update<%= h.inflection.camelize(name) %>,
} from '../components';

const classNames = classNamesFunc<keyof typeof styles>();

interface I<%= name %>Props {
  [x: string]: any;
  // declare props here
}

export function <%=name%>Page(_props: I<%= name %>Props) {
  const [query, setQuery] = useInputState('');

  const {
    loading,
    data,
    page: [page, setPage],
    total,
    refresh,
  } = usePagination(
    (page, pageSize) =>
      <%= h.inflection.camelize(name, true) %>Service.get<%= h.inflection.camelize(name) %>List({ page, pageSize, q: query }),
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
    <div className={classNames(styles['<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>'])}><%= name %>
      <Seo
        title={'<%=name%>'}
        description='Page generate for <%=name%>'
        type='preview'
      />
      <h1><%=name%></h1>
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

        <Create<%= h.inflection.camelize(name) %> onSuccess={() => refresh(1)} />
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
                <Detail<%= h.inflection.camelize(name) %> data={data} />
                <Update<%= h.inflection.camelize(name) %>
                  data={data}
                  onSuccess={() => refresh(1)}
                />
                <Delete<%= h.inflection.camelize(name) %>
                  data={data}
                  onSuccess={() => refresh(1)}
                />
              </Group>
            ),
          },
        ]}
      />
    </div>
  );
}

export const Component = <%=name%>Page;
