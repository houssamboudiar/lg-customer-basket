import { useSelector } from 'react-redux';

import { Container } from './Basket.styled';
import { selectBasket } from './basketSlice';
import { CartProducts } from './CartProducts';
import { AvailableProducts } from './AvailableProduct';
 
export const Basket = () => {

  const availableProducts = useSelector(selectBasket).availableProducts;
  const cartProducts = useSelector(selectBasket).cartProducts;

  return (
    <Container>
      <AvailableProducts products={availableProducts} />
      <CartProducts products={cartProducts} />
    </Container>
  )
  
}