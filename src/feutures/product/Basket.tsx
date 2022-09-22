import React from 'react'; // we need this to make JSX compile
import { useSelector } from 'react-redux';
import { AvailableProducts } from './AvailableProduct';
import { AvailableProductCard, Container, Description, Header, ImageContainer, ProductImage, ProductInfo, SubHeader } from './Basket.styled';
import { selectBasket } from './basketSlice';
import { CartProducts } from './CartProducts';
 
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