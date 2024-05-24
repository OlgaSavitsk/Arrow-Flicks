import {
  TextInput, Button, Image,
} from '@mantine/core';

import { useCallback, useState } from 'react';
import { useAppContext } from '@hooks/index';
import { appActions } from '@store/index';
import classes from './index.module.css';

const SearchComponent: React.FC = () => {
  const { dispatch } = useAppContext();
  const [value, setValue] = useState('');

  const handleSearch = useCallback(() => {
    dispatch(appActions.setSearchWord(value));
  }, [dispatch, value]);

  return (
    <TextInput
      placeholder="Search movie title"
      rightSectionWidth={42}
      leftSection={<Image src="../icons/search.svg" />}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={
        <Button h={32} size="sm" onClick={handleSearch}>Search</Button>
      }
      classNames={classes}
    />
  );
};

export default SearchComponent;
