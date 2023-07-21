import { Seo } from 'shared/components';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from 'shared/store';
import { Avatar, Stack, Text } from '@mantine/core';

export function ProfilePage() {
  const { t } = useTranslation(['common']);
  const { user } = useAuthStore();

  return (
    <div>
      <Seo
        title='Trang cá nhân'
        description='A template code react common and reuse <3'
        type='preview'
      />
      <Stack>
        <Text>
          {t('common:welcome')} {user?.email}
        </Text>
        <Avatar src={user?.avatarUrl} alt="it's me" />
      </Stack>
    </div>
  );
}

export const Component = ProfilePage;
