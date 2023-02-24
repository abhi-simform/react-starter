import { ComponentProps } from 'react';
import './Button.scss';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline';
  size?: 'small' | 'regular' | 'large';
}
const Button = (props: ButtonProps) => {
  const { variant = 'primary', size = 'regular', className, ...rest } = props;
  const btnClass = className ? `btn btn--${variant} btn--${size} ${className}` : `btn btn--${variant} btn--${size}`;

  return <button className={btnClass} {...rest} />;
};

export default Button;
