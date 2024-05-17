import classes from './index.module.css';

interface CountryPillProps extends React.ComponentPropsWithoutRef<'div'> {
  data: any[];
  value: string;
  onRemove?: () => void;
}

export const CountryPill = ({
  value, onRemove, data, ...others
}: CountryPillProps) => {
  const genre = data && data.find((item: any) => item.name === value);

  return (
    <div className={classes.pill} {...others}>
      <div className={classes.label}>{genre?.name}</div>
    </div>
  );
};
