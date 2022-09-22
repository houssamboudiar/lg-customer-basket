import styled from "styled-components";

export const Header = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 30px;
    justify-content: flex-start;
    margin: 0.5rem 0.5rem 0.5rem 0rem;
`
export const SubHeader = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    justify-content: flex-start;
    margin: 0rem 0rem;
`

export const Label = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #979191;
    font-weight: 500;
    font-size: 25px;
    justify-content: flex-start;
    margin: 0rem 0rem;
`

export const Total = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 25px;
    justify-content: flex-start;
    margin: 0rem 0rem;
`

export const ActionText = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    justify-content: flex-start;
    margin: 0rem 0rem;
`

export const PriceTag = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    justify-content: flex-end;
    margin: 0rem 0rem;
`

export const Description = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    justify-content: flex-start;
    margin: 0rem 0rem;
`

export const Container = styled.div`
    display: flex;

`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem;
`

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F6F6F6;
    width: 100%;
    padding: 2rem;
`

export const AvailableProductCard = styled.div`
    display: flex;
    margin-bottom: 1rem;
    flex-direction: row;
    border: black solid 1px;
    padding: 10px;
    border-radius: 7px;
    box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.53);
    -webkit-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.53);
    -moz-box-shadow: 4px 4px 4px 0px rgba(0,0,0,0.53);
`

export const CartProductCard = styled.div`
    display: flex;
    margin-bottom: 1rem;
    flex-direction: row;
    border-bottom: black solid 1px;
    padding: 10px;
`

export const ProductImage = styled.div.attrs((props: { image: string }) => props)`
  background-image: url(${props => props.image});
  border-radius: 7px;
  width: 150px;
  height: 150px;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 1rem;
    flex-grow: 1;
    .circular-rounded {
        border: black solid 1px;
        border-radius: 50%;    
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
`;

export const CardHeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 4;
    align-items: center;
    justify-content: space-between;
    .align-right{
        justify-content: flex-end;
    }
`;

export const PricingColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 4;
    align-items: center;
    justify-content: center
`;

export const CardButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 4;
    align-items: center;
    justify-content: flex-end;
`;

export const QuantityButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    align-items: center;
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AddToCartButton = styled.button`
    align-items: center;
    background-color: #0A66C2;
    border: 0;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 20px;
    max-width: 300px;
    min-height: 40px;
    min-width: 0px;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover{ 
      background-color: #16437E;
      color: #ffffff;
    }
    &:active {
    background: #09223b;
    color: rgb(255, 255, 255, .7);
    }
`;

export const QuantityButton = styled.button`
    align-items: center;
    background-color: #ffffff;
    border: black solid 1px;
    border-radius: 50%;
    color: #111111;
    cursor: pointer;
    display: flex;
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 600;
    justify-content: center;
    width: 25px;
    height: 25px;
    padding: 20px;
    margin: 0px 20px;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    &:hover{ 
      background-color: #16437E;
      color: #ffffff;
    }
    &:active {
    background: #09223b;
    color: rgb(255, 255, 255, .7);
    }
`;