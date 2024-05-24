import { LoadingOverlay } from '@mantine/core';
import { FC, PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
  isLoading?: boolean;
}

const LoaderComponent: FC<Props> = ({ isLoading, children }): JSX.Element => {
  if (isLoading) {
    return (
      <LoadingOverlay
        visible={isLoading}
        overlayProps={{ blur: 2 }}
        loaderProps={{ size: 'lg', type: 'dots' }}
        styles={{
          root: {
            alignItems: 'flex-start',
          },
          loader: {
            top: '20vh',
          },
        }}
      />
    );
  }

  return children as ReactElement;
};

export default LoaderComponent;
