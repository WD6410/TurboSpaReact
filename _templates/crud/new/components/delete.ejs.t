---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/Delete<%= h.inflection.camelize(name) %>.tsx
---
import { ActionIcon, Button } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { ExtendModal } from 'shared/components';
import { <%= h.inflection.camelize(name) %> } from 'features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model';
import { useDisclosure } from '@mantine/hooks';
import { useRequest } from 'alova';
import { <%= h.inflection.camelize(name, true) %>Service } from '../services/<%= h.inflection.camelize(name, true) %>Service.ts';
import { notifications } from '@mantine/notifications';
import { get } from 'lodash-es';

type Delete<%= h.inflection.camelize(name) %>Props = {
  data: <%= h.inflection.camelize(name) %>;
  onSuccess: () => void;
};

export const Delete<%= h.inflection.camelize(name) %> = ({
  data,
  onSuccess,
}: Delete<%= h.inflection.camelize(name) %>Props) => {
  const [isOpen, { open, close }] = useDisclosure(false);

  const { loading, send: deleteApi } = useRequest(
    (id) => <%= h.inflection.camelize(name, true) %>Service.delete<%= h.inflection.camelize(name) %>(id),
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


