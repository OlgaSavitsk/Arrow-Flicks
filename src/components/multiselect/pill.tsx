import { Genre } from '@typing/index';
import classes from './index.module.css';

interface PillProps extends React.ComponentPropsWithoutRef<'div'> {
  data: Genre[];
  value: string;
  onRemove?: () => void;
}

export const PillComponent = ({
  value, onRemove, data, ...others
}: PillProps) => {
  const genre = data && data.find((item: Genre) => item.name === value);

  return (
    <div className={classes.pill} {...others}>
      <div className={classes.label}>{genre?.name}</div>
    </div>
  );
};
