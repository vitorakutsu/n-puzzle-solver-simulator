import styled from 'styled-components';
import { fontSize } from '~/styles/theme/font-size';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

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
  font-family: regular;
  font-size: ${fontSize.m};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around; /* Espaça os botões uniformemente */
  gap: 16px; /* Adiciona espaço entre os botões */
  margin-top: 16px;
`;
