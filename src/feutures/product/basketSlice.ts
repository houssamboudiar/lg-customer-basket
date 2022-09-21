import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface Product {
  name: string;
  cost: number;
}

// Define a type for the slice state
interface BasketState {
  availableProducts: Product[],
}

// Define the initial state using that type
const initialState: BasketState = {
  availableProducts: [
    {
      name: "Butter", 
      cost: 0.80
    }, 
    {
      name: "Milk", 
      cost: 1.15
    }, 
    {
      name: "Bread", 
      cost: 1.00
    }
  ]
}

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
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

// export const { increment, decrement, incrementByAmount } = basketSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBasket = (state: RootState) => state.basket.availableProducts

export default basketSlice.reducer