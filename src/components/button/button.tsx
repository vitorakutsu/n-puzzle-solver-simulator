import { Container, Label } from './button.styles';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  LIGHT = 'light',
}

interface IButton {
  label: string;
  onClick: () => void;
  type: ButtonType;
}

export const Button = ({ label, onClick, type }: IButton) => {
  return (
    <Container type={type} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};
