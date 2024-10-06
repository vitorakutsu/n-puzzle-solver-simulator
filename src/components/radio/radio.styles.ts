import styled, { keyframes } from 'styled-components';
import { color } from '~/styles/theme/color';
import { fontSize } from '~/styles/theme/font-size';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const OptionDisplay = styled.div<{ direction: 'left' | 'right' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-height: 75px;
  padding: 20px;
  border: 1px solid ${color.darkSecondary};
  border-radius: 8px;
  text-align: center;
  background-color: ${color.secondary};
  font-size: 1.5em;

  animation: ${(props) => (props.direction === 'left' ? slideInLeft : slideInRight)} 0.5s ease-in-out forwards;
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const Label = styled.p`
  font-family: medium;
  font-size: ${fontSize.xs};
`;

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;
