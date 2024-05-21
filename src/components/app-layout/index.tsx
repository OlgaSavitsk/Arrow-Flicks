import { RoutePath } from '@constants/index';
import { useRouter } from 'next/router';
import NotFoundPage from '@pages/404';
import MainLayout from './main-layout';

const pageLayout = {
  [RoutePath.Home]: MainLayout,
  [RoutePath.Rated]: MainLayout,
  [RoutePath.NotFound]: NotFoundPage,
};

type LayoutProps = {
  children: React.ReactElement
};

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const { route } = useRouter();

  const Layout = pageLayout[route as RoutePath];

  return (
    <Layout>
      {children}
    </Layout>
  );
};

export default LayoutComponent;
