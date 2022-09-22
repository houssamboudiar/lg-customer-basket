import { findIconDefinition, IconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AvailableProductCard, ProductsWrapper, Description, Header, ImageContainer, ProductImage, ProductInfo, SubHeader, AddToCartButton, PriceTag, Rating, CardButton, CardHeaderRow } from './Basket.styled';
import basketSlice, { addProductCart, Product } from './basketSlice';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { store } from '../../store';

interface props{
    products: Product[];
}

export const AvailableProducts = ({ products }: props) => {
    return (
        <ProductsWrapper>
            <Header>Products</Header>
            {
                products.map((product, index)=>{
                    return (
                    <AvailableProductCard key={index}>
                        <ImageContainer>
                            <ProductImage image={product.img} />
                        </ImageContainer>
                        <ProductInfo className="align-right">
                            <CardHeaderRow>
                                <SubHeader>{product.name}</SubHeader>
                                <Rating>
                                    <AiFillStar color="#FFBF35" fontSize={"20px"}/>
                                    <AiFillStar color="#FFBF35" fontSize={"20px"} />
                                    <AiFillStar color="#FFBF35" fontSize={"20px"} />
                                    <AiFillStar color="#FFBF35" fontSize={"20px"} />
                                    <AiOutlineStar color="#FFBF35" fontSize={"20px"} />
                                </Rating>
                            </CardHeaderRow>
                            <CardHeaderRow>
                                <Description>{product.description}</Description>
                                <PriceTag> £{product.cost}</PriceTag>
                            </CardHeaderRow>
                            <CardButton>
                                <AddToCartButton onClick={()=>{
                                    store.dispatch(addProductCart(product));
                                }} >Add To Cart</AddToCartButton>
                            </CardButton>
                        </ProductInfo>
                    </AvailableProductCard>
                    )
                })
            }
        </ProductsWrapper>
    )
}