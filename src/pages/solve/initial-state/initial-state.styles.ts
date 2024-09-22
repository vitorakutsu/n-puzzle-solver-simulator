import styled from 'styled-components';
import { Button, ButtonType } from '~/components/button/button';
import { fontSize } from '~/styles/theme/font-size';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 80px;
`;

export const TextWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.xl};
`;

export const Paragraph = styled.p`
  font-family: medium;
  font-size: ${fontSize.s};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`;

export const Subtitle = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.m};
  margin-top: -32px;
`;

export const LightButton = styled(Button).attrs({
  type: ButtonType.LIGHT,
})``;

export const PrimaryButton = styled(Button).attrs({
  type: ButtonType.PRIMARY,
})``;

export const SecondaryButton = styled(Button).attrs({
  type: ButtonType.SECONDARY,
})``;
