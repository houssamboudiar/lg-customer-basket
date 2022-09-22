import { store } from '../../store';
import { useSelector } from 'react-redux';

import { ActionText, CartProductCard, CartWrapper, DiscountTag, Header, ImageContainer, Label, 
        PriceTag, PricingColumn, ProductImage, ProductInfo, QuantityButton, QuantityButtonGroup, 
        StatsWrapper, SubHeader, Total } from './Basket.styled';
        
import { decreaseProductQty, increaseProductQty, Product, selectBasket } from './basketSlice';

interface props{
    products: Product[];
}

export const CartProducts = ({ products }: props) => {
    const [total,subTotal,milkDiscount,breadDiscount,discount] = [  useSelector(selectBasket).total, 
                                                                    useSelector(selectBasket).subTotal, 
                                                                    useSelector(selectBasket).milkDiscount,
                                                                    useSelector(selectBasket).breadDiscount,
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
                                <PriceTag > £{product.qtyCost.toFixed(2)}</PriceTag>
                                {(milkDiscount!=0 && product.name == "Fresh Suiss milk") && <DiscountTag> <s>£{milkDiscount.toFixed(2)}</s></DiscountTag>}
                                {(breadDiscount!=0 && product.name == "Whole French bread") && <DiscountTag> <s>£{breadDiscount.toFixed(2)}</s></DiscountTag>}
                        </PricingColumn>
                    </CartProductCard>
                    )
                })
            }
            <StatsWrapper>
                <Label > Subtotal</Label>
                <Total > £{subTotal.toFixed(2)}</Total>
                <Label > Discount</Label>
                <Total > £{discount.toFixed(2)}</Total>
                <Label > Total</Label>
                <Total > £{total.toFixed(2)}</Total>
            </StatsWrapper>
        </CartWrapper>
    )
}