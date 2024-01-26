import { ReactNode } from 'react';
import cx from 'classnames';
import './Button.scss';

interface ButtonProps {
  type?: ButtonTypes;
  children?: ReactNode | string;
  disabled?: boolean;
}

type ButtonTypes = 'primary' | 'secondary';

function Button(props: ButtonProps) {
  const { type ='primary', children, disabled } = props;

  return (
    <button className={cx(type, { disabled })} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
