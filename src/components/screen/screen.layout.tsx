import { ReactNode } from 'react';
import { TopBar } from '../top-bar/top-bar';
import { Children, Container } from './screen.styles';

interface IScreenLayout {
  children: ReactNode;
}

export const ScreenLayout = ({ children }: IScreenLayout) => {
  const renderTopBar = () => <TopBar />;

  return (
    <Container>
      {renderTopBar()}
      <Children>{children}</Children>
    </Container>
  );
};
