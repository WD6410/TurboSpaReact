---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/Update<%= h.inflection.camelize(name) %>.tsx
---

import {
  ActionIcon,
  Box,
  Button,
  Group,
  TextInput,
} from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import {
  Update<%= h.inflection.camelize(name) %>Request,
  <%= h.inflection.camelize(name, true) %>Service,
} from '../services/<%= h.inflection.camelize(name, true) %>Service.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';
import { useForm } from '@mantine/form';
import { <%= h.inflection.camelize(name) %> } from '../model';

type Update<%= h.inflection.camelize(name) %>Props = {
  onSuccess: () => void;
  data: <%= h.inflection.camelize(name) %>;
};

export const Update<%= h.inflection.camelize(name) %> = ({
  onSuccess,
  data,
}: Update<%= h.inflection.camelize(name) %>Props) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: updateApi } = useRequest(
    (payload) => <%= h.inflection.camelize(name, true) %>Service.update<%= h.inflection.camelize(name) %>(data.id, payload),
    { immediate: false },
  );

  const updateForm = useForm<Update<%= h.inflection.camelize(name) %>Request>({
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

