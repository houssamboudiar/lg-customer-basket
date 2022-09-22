import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

const BREAD_DISCOUNT = 0.50;
const MILK_DISCOUNT = 1.15;
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
  breadDiscount: number,
  milkDiscount: number,
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
      qty: 0, 
    }, 
    {
      id: 1, 
      name: "Fresh Suiss milk", 
      description: "semi skimmed milk that comes straight from the alpes farmers.", 
      cost: 1.15,
      img: '/src/assets/milk.jpg', 
      qty: 0,
    }, 
    {
      id: 2, 
      name: "Whole French bread", 
      description: "produced by us to insure a high quality butter.", 
      cost: 1.00,
      img: '/src/assets/bread.jpg', 
      qty: 0,
    }],
    cartProducts: [],
    subTotal: 0,
    breadDiscount: 0,
    milkDiscount: 0,
    discount: 0,
    total: 0,
}

const computeBreadDiscount = (products: Product[], oldBreadDiscount: number) => {

  let breadDiscount = 0;

  let butterQty = products.find((p) => p.id === 0)?.qty ?? 0;
  let breadQty = products.find((p) => p.id === 2)?.qty ?? 0;

  if (butterQty >= 2) {
    let discountedBread = Math.trunc(butterQty / 2);
    if(breadQty >= discountedBread){
      breadDiscount = discountedBread * BREAD_DISCOUNT;
    }else{
      breadDiscount +=  oldBreadDiscount;
    }
  }
  return breadDiscount;
}


const computeMilkDiscount = (products: Product[], oldDiscount: number) => {

  let milkDiscount = 0;

  let milkQty = products.find((p) => p.id === 1)?.qty ?? 0;

  if (milkQty >= 4) {
    let discountedMilk = Math.trunc(milkQty / 4);
    milkDiscount = discountedMilk * MILK_DISCOUNT;
  }else{
    milkDiscount += oldDiscount;
  }

  return milkDiscount;
}

const computeCartSubTotal = (products: Product[]) => {
  let subTotal = 0;
  if (products.length === 0) {
      return subTotal;
  }
  products.map((product) => {
      subTotal = subTotal + product.cost * product.qty;
      return product;
  });
  return subTotal;
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
        state.cartProducts.push({...action.payload, qty:1});
      }

      state.subTotal = computeCartSubTotal(state.cartProducts);
      state.breadDiscount = computeBreadDiscount(state.cartProducts, state.breadDiscount);
      state.milkDiscount = computeMilkDiscount(state.cartProducts, state.milkDiscount);
      state.discount = state.breadDiscount + state.milkDiscount;
      state.total = state.subTotal - state.discount;
    },
    increaseProductQty(state, action) {
      state.cartProducts.map((p) => {
        if(p.id === action.payload.id) p.qty++;
        return p;
      });
      state.subTotal = computeCartSubTotal(state.cartProducts);
      state.breadDiscount = computeBreadDiscount(state.cartProducts, state.breadDiscount);
      state.milkDiscount = computeMilkDiscount(state.cartProducts, state.milkDiscount);
      state.discount = state.breadDiscount + state.milkDiscount;
      state.total = state.subTotal - state.discount;
    },
    decreaseProductQty(state, action) {
        let index = state.cartProducts.findIndex(function(o){
          return o.id === action.payload.id;
        })

        if(state.cartProducts[index].id === action.payload.id && state.cartProducts[index].qty > 1)
          state.cartProducts[index].qty--;
        else
          state.cartProducts.splice(index, 1); 

        state.subTotal = computeCartSubTotal(state.cartProducts);
        state.breadDiscount = computeBreadDiscount(state.cartProducts, state.breadDiscount);
        state.milkDiscount = computeMilkDiscount(state.cartProducts, state.milkDiscount);
        state.discount = state.breadDiscount + state.milkDiscount;
        state.total = state.subTotal - state.discount; 
    },
  }
})

export const { addProductCart, increaseProductQty, decreaseProductQty } = basketSlice.actions

export const selectBasket = (state: RootState) => state.basket

export default basketSlice.reducer