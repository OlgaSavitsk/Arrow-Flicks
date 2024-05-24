import { useEffect, useState } from 'react';
import IconChevron from '@components/icon-chevron';
import {
  Combobox, Group, Input, PillsInput, ScrollArea,
  useCombobox,
} from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Genre, MovieRequestParams } from '@typing/index';
import { selectedGenreKey } from '@utils/index';

import classes from './index.module.css';
import { PillComponent } from './pill';

type MultiSelectProps = {
  genresList: Genre[],
  label: string,
  placeholder: string,
  form: UseFormReturnType<Partial<MovieRequestParams>>
  onReset: boolean
};

const MultiSelectValueRenderer: React.FC<MultiSelectProps> = ({
  genresList,
  label,
  placeholder,
  form,
  onReset,
}) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) => {
    setValue((current) => (
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]));
  };

  const handleValueRemove = (
    val: string,
  ) => setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <PillComponent
      key={item}
      genresList={genresList}
      value={item}
      onRemove={() => handleValueRemove(item)}
    >
      {item}
    </PillComponent>
  ));

  const options = genresList.map((item: Genre, index) => {
    const isSelected = value.includes(item.name);
    return (
      <Combobox.Option
        value={item.name}
        key={item.id}
        active={isSelected}
        className={classes.option}
        onMouseOver={() => combobox.selectOption(index)}
      >
        <Group gap={16}>
          <span>{item.name}</span>
        </Group>
      </Combobox.Option>
    );
  });

  useEffect(() => {
    const genreParams = selectedGenreKey(value, genresList);
    form.setFieldValue('with_genres', genreParams);
    if (onReset) {
      setValue([]);
    }
  }, [form, genresList, onReset, value]);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          pointer
          label={label}
          onClick={() => combobox.toggleDropdown()}
          size="md"
          rightSection={<IconChevron size={20} />}
          classNames={{ input: classes.input }}
        >
          {values.length > 0 ? (
            values.map(({ key }) => key).join(', ')
          ) : (
            <Input.Placeholder>{placeholder}</Input.Placeholder>
          )}

          <Combobox.EventsTarget>
            <PillsInput.Field
              type="hidden"
              onBlur={() => combobox.closeDropdown()}
              onKeyDown={(event) => {
                if (event.key === 'Backspace') {
                  event.preventDefault();
                  handleValueRemove(value[value.length - 1]);
                }
              }}
            />
          </Combobox.EventsTarget>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize scrollbarSize={4} mah={200} type="scroll">
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiSelectValueRenderer;
