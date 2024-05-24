import { RoutePath } from '@constants/index';
import { useRouter } from 'next/router';
import NotFoundPage from '@pages/404';
import LoaderComponent from '@components/loader';
import { Suspense } from 'react';
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
  const { route, isFallback } = useRouter();

  if (isFallback) {
    return <LoaderComponent />;
  }

  const Layout = pageLayout[route as RoutePath];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        {children}
      </Layout>
    </Suspense>
  );
};

export default LayoutComponent;
