import styled from 'styled-components';
import { fontSize } from '~/styles/theme/font-size';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  gap: 10%;
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

export const Subtitle = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.l};
`;
