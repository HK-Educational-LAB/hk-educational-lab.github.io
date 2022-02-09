import type { ReactElement } from 'react';
import CoreLayout from '@/layouts/core/CoreLayout';
import HomePage from '@/modules/home/HomePage';

const Home = () => <HomePage />;

Home.getLayout = function getLayout(page: ReactElement) {
  const headProps = { title: 'HK educational Lab - Welcome' };
  return <CoreLayout headProps={headProps}>{page}</CoreLayout>;
};

export default Home;
