import styled from 'styled-components';
import { colors } from '@globalStyles/stylesVariables';

export const Container = styled.div`
  max-width: 100%;
  height: calc(100vh);
  padding: 0px 200px 0px 200px;
  background-image: linear-gradient(to bottom right, ${colors.main}, ${colors.third});
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${colors.white};
  margin-bottom: 15px;
`

export const Subtitle = styled.h3`
  color: ${colors.white};
`
