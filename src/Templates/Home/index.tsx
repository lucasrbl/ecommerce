import { ReactNode } from 'react';

import { Navbar } from '../../components/Navbar';

type TemplatePropsType = {
  children: ReactNode;
};

export function HomeTemplate({ children }: TemplatePropsType) {
  return (
    <div className="py-10 mx-40">
      <Navbar />
      {children}
    </div>
  );
}
