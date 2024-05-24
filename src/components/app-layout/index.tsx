import { useRouter } from 'next/router';
import NotFoundPage from '@pages/404';
import { RoutePath } from '@constants/index';

import { Suspense } from 'react';
import LoaderComponent from '@components/loader';
import MainLayout from './main-layout';

const pageLayout = {
  [RoutePath.Home]: MainLayout,
  [RoutePath.Rated]: MainLayout,
  [RoutePath.Details]: MainLayout,
  [RoutePath.NotFound]: NotFoundPage,
};

type LayoutProps = {
  children: React.ReactElement
};

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const { route } = useRouter();

  const Layout = pageLayout[route as RoutePath];

  return (
    <Suspense fallback={<LoaderComponent />}>
      <Layout>
        {children}
      </Layout>
    </Suspense>
  );
};

export default LayoutComponent;
