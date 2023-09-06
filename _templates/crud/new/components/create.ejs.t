---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/index.ts
---


import { Box, Button, Group, Select, TextInput } from '@mantine/core';
import { IconAt, IconPlus } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  Create<%= h.inflection.camelize(name) %>Request,
  <%= h.inflection.camelize(name, true) %>Service,
} from '../services/<%= h.inflection.camelize(name, true) %>Service.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';
import validator from 'validator';

type Create<%= h.inflection.camelize(name) %>Props = {
  onSuccess: () => void;
};

export const Create<%= h.inflection.camelize(name) %> = ({ onSuccess }: Create<%= h.inflection.camelize(name) %>Props) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: createApi } = useRequest(
    (payload) => <%= h.inflection.camelize(name, true) %>Service.create<%= h.inflection.camelize(name) %>(payload),
    { immediate: false },
  );

  const createForm = useForm<Create<%= h.inflection.camelize(name) %>Request>({
    initialValues: {
      name: '',
    },
    validate: {
      name: (value) => (value.length ? null : 'name not empty'),
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
              'Something went wrong, please try again later!',
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
        title={'Create new <%= h.inflection.camelize(name) %>'}
      >
        <Box mx='auto' w={'100%'}>
          <form onSubmit={handleCreate}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='enter name'
              {...createForm.getInputProps('name')}
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
