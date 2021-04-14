import styled from 'styled-components';
import { colors } from '@globalStyles/stylesVariables';

export const Container = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;
`

export const Text = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin: 200px 200px 200px 200px;
`

export const Title = styled.h2`
  color: ${colors.third};
  margin-bottom: 20px;
`

export const Info = styled.p`
  color: ${colors.second};
`