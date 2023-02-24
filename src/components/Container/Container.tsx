import { ComponentProps } from 'react';
import './Container.scss';

interface ContainerProps extends ComponentProps<'div'> {
  fluid?: boolean;
}
const Container = (props: ContainerProps) => {
  const { fluid = false, className, ...rest } = props;
  const containerType = fluid ? 'container container--fluid' : 'container';
  const containerClass = className ? `${containerType} ${className}` : containerType;

  return <div className={containerClass} {...rest} />;
};

export default Container;
