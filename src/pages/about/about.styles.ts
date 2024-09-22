import styled from 'styled-components';
import { Button, ButtonType } from '~/components/button/button';
import { fontSize } from '~/styles/theme/font-size';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  gap: 5%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TextWrapper = styled.div`
  text-align: center;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.xl};
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.m};
  text-align: center;
  margin-top: -32px;
`;

export const Paragraph = styled.p`
  font-family: medium;
  font-size: ${fontSize.s};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  margin-top: 8%;
`;

export const PrimaryButton = styled(Button).attrs({
  type: ButtonType.PRIMARY,
})``;
