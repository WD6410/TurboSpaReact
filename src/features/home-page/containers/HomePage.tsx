import { useTranslation } from 'react-i18next';
import { Seo } from 'shared/components';

export function HomePage() {
  const { t } = useTranslation(['common']);
  return (
    <div>
      <Seo
        title='Trang chủ'
        description='A template code react common and reuse <3'
        type='preview'
      />
      {t(['common:welcome'])}
    </div>
  );
}

export const Component = HomePage;
