import { Genre } from '@typing/index';

import classes from './index.module.css';

interface PillProps extends React.ComponentPropsWithoutRef<'div'> {
  genresList: Genre[];
  value: string;
  onRemove?: () => void;
}

export const PillComponent = ({
  value, onRemove, genresList, ...others
}: PillProps) => {
  const genre = genresList && genresList.find((item: Genre) => item.name === value);

  return (
    <div className={classes.pill} {...others}>
      <div className={classes.label}>{genre?.name}</div>
    </div>
  );
};
