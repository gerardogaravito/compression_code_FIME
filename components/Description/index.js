import React from 'react';

import {
  Container,
  Title,
  Text,
  Info
} from './styles'

export const Description = () => {

  return(
    <Container>
      <Text>
        <Title>An Efficient Compression Code for Text Databases</Title>
        <Info>This algorithm work similar as the Huffman one, 
          the difference is that instead of get the frequency of each
          letter, we are going to work with the frequency of each repeated
          word.
        </Info>
      </Text>
    </Container>
  )
}