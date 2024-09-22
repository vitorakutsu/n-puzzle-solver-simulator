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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoTitle = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.m};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Label = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.s};
`;

export const Value = styled.p`
  font-family: regular;
  font-size: ${fontSize.s};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
`;

export const TertiaryButton = styled(Button).attrs({
  type: ButtonType.TERTIARY,
})``;

export const SecondaryButton = styled(Button).attrs({
  type: ButtonType.SECONDARY,
})``;
