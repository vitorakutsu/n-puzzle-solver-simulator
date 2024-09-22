import styled from 'styled-components';
import { color } from '~/styles/theme/color';
import { fontSize } from '~/styles/theme/font-size';

export const Container = styled.div`
  width: 100%;
  max-height: 100px;
  padding: 32px;
  border-radius: 8px;
  background-color: ${color.neutral.lightest};
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  object-fit: cover;
`;

export const FlagImage = styled.img`
  object-fit: cover;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Text = styled.a`
  font-family: regular;
  font-size: ${fontSize.xs};
`;
