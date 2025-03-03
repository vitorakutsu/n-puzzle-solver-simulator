import styled, { keyframes } from 'styled-components';
import { color } from '~/styles/theme/color';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: ${color.background};
`;

export const Children = styled.div`
  flex: 1;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  display: flex;
  padding: 32px;
`;
