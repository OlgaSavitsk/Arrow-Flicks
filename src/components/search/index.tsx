import {
  TextInput, Button, Image,
} from '@mantine/core';

import classes from './index.module.css';

type SearchComponentProps = {
  children: React.ReactElement
};

const SearchComponent: React.FC = () => (
  <TextInput
    placeholder="Search movie title"
    rightSectionWidth={42}
    leftSection={<Image src="../icons/search.svg" />}
    rightSection={
      <Button h={32} size="sm">Search</Button>
    }
    classNames={classes}
  />
);

export default SearchComponent;
