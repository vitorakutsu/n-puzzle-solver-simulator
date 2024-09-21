import styled from 'styled-components';
import { color } from '~/styles/theme/color';
import { fontSize } from '~/styles/theme/font-size';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  width: 600px;
  height: 600px;
`;

export const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.children ? color.neutral.lightest : color.neutral.dark)};
  border: 2px solid ${color.neutral.darkest};
  height: 200px;
  width: 200px;
  cursor: ${(props) => (props.children ? 'grab' : 'default')};
  user-select: none;

  font-family: extra-bold;
  font-size: ${fontSize.l};

  &:active {
    cursor: ${(props) => (props.children ? 'grabbing' : 'default')};
  }
`;
