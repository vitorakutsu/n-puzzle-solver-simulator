import styled from 'styled-components';
import { color } from '~/styles/theme/color';

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
  display: flex;
  padding: 32px;
`;
