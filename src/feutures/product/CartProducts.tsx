import React from 'react'; // we need this to make JSX compile
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { ActionText, AddToCartButton, AvailableProductCard, CardButton, CardHeaderRow, CartProductCard, CartWrapper, Description, Header, ImageContainer, Label, PriceTag, PricingColumn, ProductImage, ProductInfo, ProductsWrapper, QuantityButton, QuantityButtonGroup, SubHeader, Total } from './Basket.styled';
import { addProductCart, decreaseProductQty, increaseProductQty, Product, selectBasket } from './basketSlice';

interface props{
    products: Product[];
}

export const CartProducts = ({ products }: props) => {
    const [total,subTotal,discount] = [ useSelector(selectBasket).total, 
                                        useSelector(selectBasket).subTotal, 
                                        useSelector(selectBasket).discount];
    return (
        <CartWrapper>
            <Header>Cart</Header>
            {
                products.map((product, index)=>{
                    return (
                    <CartProductCard key={index}>
                        <ImageContainer>
                            <ProductImage image={product.img} className="circular-rounded" />
                        </ImageContainer>
                        <ProductInfo >
                            <SubHeader>{product.name}</SubHeader>
                            <QuantityButtonGroup>
                                <ActionText>quantity </ActionText>
                                <QuantityButton onClick={()=>{
                                    store.dispatch(decreaseProductQty(product));
                                }} >-</QuantityButton>
                                <SubHeader>{product.qty}</SubHeader>
                                <QuantityButton onClick={()=>{
                                    store.dispatch(increaseProductQty(product));
                                }} >+</QuantityButton>
                            </QuantityButtonGroup>
                        </ProductInfo>
                        <PricingColumn >
                                <PriceTag > £{product.cost}</PriceTag>
                        </PricingColumn>
                    </CartProductCard>
                    )
                })
            }
                <Label > Subtotal</Label>
                <Total > {subTotal.toFixed(2)}</Total>
                <Label > Discount</Label>
                <Total > {discount.toFixed(2)}</Total>
                <Label > Total</Label>
                <Total > {total.toFixed(2)}</Total>
        </CartWrapper>
    )
}