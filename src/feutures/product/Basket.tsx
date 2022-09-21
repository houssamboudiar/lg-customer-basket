import React from 'react'; // we need this to make JSX compile
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
`
 
export const Basket = () => {
  return (
    <Container>
      <h1>Basket Component</h1>
    </Container>
  )
}