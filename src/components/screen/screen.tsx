import { ReactNode } from 'react';
import { ScreenLayout } from './screen.layout';

interface IScreen {
  children: ReactNode;
}

export const Screen = ({ children }: IScreen) => {
  return <ScreenLayout children={children} />;
};
