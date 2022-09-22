import React from 'react'; // we need this to make JSX compile
import { AvailableProductCard, Description, Header, ImageContainer, ProductImage, ProductInfo, ProductsWrapper } from './Basket.styled';
import { Product } from './basketSlice';

interface props{
    products: Product[];
}

export const CartProducts = ({ products }: props) => {
    return (
        <ProductsWrapper>
            <Header>Cart</Header>
            {
                products.map((product, index)=>{
                    return (
                    <AvailableProductCard key={index}>
                        <ImageContainer>
                        <ProductImage></ProductImage>
                        </ImageContainer>
                        <ProductInfo>
                            <Header>{product.name}</Header>
                            <Description>{product.description}</Description>
                        </ProductInfo>
                    </AvailableProductCard>
                    )
                })
            }
        </ProductsWrapper>
    )
}