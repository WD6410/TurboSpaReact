import { Seo } from 'shared/components';
import { Box, Center, Text } from '@mantine/core';
import Lottie from 'lottie-react';
import { LottieBanner } from 'assets';
import styles from './HomePageStyles.module.scss';
import { classNamesFunc } from 'classnames-generics';

const classNames = classNamesFunc<keyof typeof styles>();

export function HomePage() {
  return (
    <Box className={classNames(styles['home-container'])}>
      <Seo
        title='Trang chủ'
        description='A template code react common and reuse <3'
        type='preview'
      />
      <Center className={classNames(styles['home-container__center'])}>
        <Lottie
          style={{
            width: 500,
            height: 500,
          }}
          animationData={LottieBanner}
        />
        <Text
          variant='gradient'
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          ta='center'
          fz='32px'
          fw={700}
        >
          Turbo React App
        </Text>
      </Center>
    </Box>
  );
}

export const Component = HomePage;
