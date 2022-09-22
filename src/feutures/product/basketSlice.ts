import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface Product {
  id: number;
  name: string;
  img: string;
  description: string;
  cost: number;
  qty: number;
}

// Define a type for the slice state
interface BasketState {
  availableProducts: Product[],
  cartProducts: Product[],
  total: number,
  subTotal: number,
  discount: number,
}

// Define the initial state using that type
const initialState: BasketState = {
  availableProducts: [
    {
      id: 0, 
      name: "Butter", 
      description: "made in paris and destinated to the whole world.", 
      cost: 0.80,
      img: '/src/assets/butter.jpg', 
      qty: 1, 
    }, 
    {
      id: 1, 
      name: "Fresh Suiss milk", 
      description: "semi skimmed milk that comes straight from the alpes farmers.", 
      cost: 1.15,
      img: '/src/assets/milk.jpg', 
      qty: 1,
    }, 
    {
      id: 2, 
      name: "Whole French bread", 
      description: "produced by us to insure a high quality butter.", 
      cost: 1.00,
      img: '/src/assets/bread.jpg', 
      qty: 1,
    }],
    cartProducts: [],
    total: 0,
    subTotal: 0,
    discount: 0,
}

const computeCartTotal = (products: Product[]) => {
  let total = 0;
  if (products.length === 0) {
      return total;
  }
  products.map((product) => {
      total =
          total + product.cost * product.qty;
      return product;
  });
  return total;
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductCart(state, action) {
      if (state.cartProducts.find((p) => p.id === action.payload.id)){
          state.cartProducts.map((p) => {
            if(p.id === action.payload.id) p.qty++;
            return p;
          });
      }
      else{
          state.cartProducts.push(action.payload);
      }
      state.total = computeCartTotal(state.cartProducts);
    },
    increaseProductQty(state, action) {
      state.cartProducts.map((p) => {
        if(p.id === action.payload.id) p.qty++;
        return p;
      });
      state.total = computeCartTotal(state.cartProducts);
    },
    decreaseProductQty(state, action) {
        let index = state.cartProducts.findIndex(function(o){
          return o.id === action.payload.id;
        })
        if(state.cartProducts[index].id === action.payload.id && state.cartProducts[index].qty > 1)
          state.cartProducts[index].qty--;
        else
          state.cartProducts.splice(index, 1); 
        state.total = computeCartTotal(state.cartProducts);         
    },
  }
})

export const { addProductCart, increaseProductQty, decreaseProductQty } = basketSlice.actions

export const selectBasket = (state: RootState) => state.basket

export default basketSlice.reducer