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
    cartProducts: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProductCart(state, action) {
      if (state.cartProducts.find((p) => p.id === action.payload.id)){
          state.cartProducts.find((p) => {
            p.qty++;
            return (p.id === action.payload.id)
          });
      }
      else{
          state.cartProducts.push(action.payload);
      }
    },
    increaseProductQte(state, action) {
      state.cartProducts.find((p) => {
        p.qty++;
        return (p.id === action.payload.id)
      });
    },
    decreaseProductQte(state, action) {
        const pr = state.cartProducts.find((p) => p.id === action.payload.id) || { qty : 0 };
        if (pr.qty > 0) {
          state.cartProducts.find((p) => {
            p.qty--;
            return (p.id === action.payload.id)
          });
        };
    },
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

export const { addProductCart } = basketSlice.actions

export const selectBasket = (state: RootState) => state.basket

export default basketSlice.reducer