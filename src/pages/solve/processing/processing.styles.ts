import styled from 'styled-components';
import { color } from '~/styles/theme/color';
import { fontSize } from '~/styles/theme/font-size';

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 80px;
`;

export const TextWrapper = styled.div`
  text-align: center;
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.p`
  font-family: semi-bold;
  font-size: ${fontSize.xl};
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${color.neutral.darkest};
    animation: bounce 0.6s infinite alternate;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-20px);
    }
  }
`;
