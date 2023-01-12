import React, { FC } from 'react';
import classNames from '@lib/classNames';
import { CircularProgress } from '@mui/material';

export type props = {
  className?: string;
  color?: 'primary' | 'neutral' | 'danger' | 'success' | 'none';
  weight?: 'solid' | 'outline' | 'ghost' | 'inline';
  shape?: 'pill' | 'semibrick' | 'brick';
  size?: 'small' | 'medium' | 'large' | 'relative';
  align?: 'left' | 'center' | 'right';
  label?: string | number;
  icon?: React.ReactElement<SVGElement, string | React.JSXElementConstructor<any>>;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<props> = ({
  className,
  color,
  weight,
  shape,
  size,
  label,
  icon,
  iconPosition,
  loading,
  align,
  fullWidth,
  ...props
}) => {
  const colorStyle = classNames(
    color == 'primary'
      ? classNames(
          weight == 'solid'
            ? 'btn-primary'
            : weight == 'outline'
            ? 'btn-primary-outline'
            : weight == 'ghost'
            ? 'btn-primary-ghost'
            : weight == 'inline' && 'text-primary-500'
        )
      : color == 'neutral'
      ? classNames(
          weight == 'solid'
            ? 'btn-neutral'
            : weight == 'outline'
            ? 'btn-neutral-outline'
            : weight == 'ghost'
            ? 'btn-neutral-ghost'
            : weight == 'inline' && 'text-gray-500'
        )
      : color == 'danger'
      ? classNames(
          weight == 'solid'
            ? 'btn-danger'
            : weight == 'outline'
            ? 'btn-danger-outline'
            : weight == 'ghost'
            ? 'btn-danger-ghost'
            : 'text-red-500'
        )
      : color == 'success' &&
        classNames(
          weight == 'solid'
            ? 'btn-success'
            : weight == 'outline'
            ? 'btn-success-outline'
            : weight == 'ghost'
            ? 'btn-success-ghost'
            : weight == 'inline' && 'text-green-500'
        )
  );

  const sizeStyle = classNames(
    size == 'small'
      ? 'text-xs py-1 py-2'
      : size == 'medium'
      ? 'text-sm'
      : size == 'large' && 'text-sm sm:text-base'
  );

  const shapeStyle = classNames(shape == 'pill' ? 'rounded-full' : shape == 'semibrick' && 'rounded-md');

  const alignStyle = classNames(
    align == 'right'
      ? 'justfy-start text-right'
      : align == 'center'
      ? 'justify-center text-center'
      : 'justify-end text-left'
  );

  const paddingStyle = classNames(
    !label && icon
      ? 'p-3'
      : size == 'small' && weight != 'inline'
      ? 'py-2 px-3'
      : weight == 'inline'
      ? 'p-0'
      : 'py-3 px-5'
  );

  const style = classNames(
    'flex items-center font-semibold space-x-2 transition duration-300',
    colorStyle,
    sizeStyle,
    shapeStyle,
    alignStyle,
    paddingStyle,
    fullWidth ? 'w-full' : 'w-max',
    className
  );
  return (
    <button className={style} disabled={loading} {...props}>
      {loading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        <>
          {icon && iconPosition == 'left' && <div>{icon}</div>}
          {label && <p>{label}</p>}
          {icon && iconPosition == 'right' && <div>{icon}</div>}
        </>
      )}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  shape: 'brick',
  weight: 'solid',
  size: 'medium',
  loading: false,
  iconPosition: 'left',
  fullWidth: false,
  align: 'center',
};
export default Button;
