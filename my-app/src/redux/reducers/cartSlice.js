import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        toast.info(`${action.payload.name} مجدداً به سبد خرید اضافه شد`, {
          position: 'bottom-left',
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempProduct)
        toast.success('یک محصول به سبد خرید اضافه شد', {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id,
      )

      state.cartItems = nextCartItems
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
      toast.error(`${action.payload.name} از سبد خرید حذف شد`, {
        position: 'bottom-left',
      })
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info(`${action.payload.name} از سبد خرید کم شد`)
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id,
        )

        state.cartItems = nextCartItems

        toast.error(`${action.payload.name} از سبد خرید حذف شد`, {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    clearCart(state, action) {
      state.cartItems = []
      toast.error(`تمامی کالاها از سبد خرید حذف شدند`, {
        position: 'bottom-left',
      })
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    getTotals(state, action) {
      let {total , quantity} = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        },
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions

export default cartSlice.reducer
