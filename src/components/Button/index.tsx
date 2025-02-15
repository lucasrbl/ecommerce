import { ReactNode } from 'react';

type ButtonPropsType = {
  onChange: () => void;
  className: string;
  children: ReactNode;
};

export function Button({ onChange, className, children }: ButtonPropsType) {
  return (
    <button className={className} onChange={onChange}>
      {children}
    </button>
  );
}
