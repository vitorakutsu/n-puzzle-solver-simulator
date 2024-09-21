import styled from 'styled-components';
import { ButtonType } from './button';
import { color } from '~/styles/theme/color';
import { fontSize } from '~/styles/theme/font-size';

const getButtonColor = (type: ButtonType) => {
  switch (type) {
    case ButtonType.PRIMARY:
      return color.primary;
    case ButtonType.SECONDARY:
      return color.secondary;
    case ButtonType.TERTIARY:
      return color.tertiary;
    case ButtonType.LIGHT:
      return color.neutral.light;
  }
};

export const Container = styled.button<{ type: ButtonType }>`
  flex: 1;
  width: 100%;
  max-height: 75px;
  padding: 16px;
  background-color: ${({ type }) => getButtonColor(type)};
  border-radius: 8px;
`;

export const Label = styled.p`
  font-family: medium;
  font-size: ${fontSize.xs};
`;
