import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems?.findIndex(
        (item) => item.product.id === action.payload.product.id,
      )
      console.log(itemIndex)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].inventory = action.payload.inventory
        state.cartItems[itemIndex].totalRow = action.payload.totalRow
        toast.info(`${action.payload.name} مجدداً به سبد خرید اضافه شد`, {
          position: 'bottom-left',
        })
      } else {
        const tempProduct = {
          ...action.payload,
          inventory: action.payload.inventory,
          cartQuantity: 1,
        }
        state.cartItems.push(tempProduct)

        toast.success('یک محصول به سبد خرید اضافه شد', {
          position: 'bottom-left',
        })
      }

    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.product.id !== action.payload.product.id,
      )

      state.cartItems = nextCartItems
      toast.error(`${action.payload.name} از سبد خرید حذف شد`, {
        position: 'bottom-left',
      })
      if (state.cartItems.length === 0) {
        localStorage.removeItem('count')
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      )

      if (state.cartItems[itemIndex].inventory > 1) {
        state.cartItems[itemIndex].inventory -= 1
        state.cartItems[itemIndex].totalRow =
          state.cartItems[itemIndex].inventory *
          state.cartItems[itemIndex].product.price
        //update count
        state.count = state.cartItems[itemIndex].inventory
        toast.info(`${action.payload.name} از سبد خرید کم شد`)
      } else {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.product.id !== action.payload.product.id,
        )

        state.cartItems = nextCartItems

        toast.error(`${action.payload.name} از سبد خرید حذف شد`, {
          position: 'bottom-left',
        })
      }
      // localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      // console.log(current(state.cartItems[itemIndex]));

      if (state.cartItems[itemIndex].inventory > action.payload.count) {
        toast.error(`موجودی کالا کافی نیست`, {
          position: 'top-center',
        })
       
      } else {
        state.cartItems[itemIndex].inventory += 1;
        //total row count
        state.cartItems[itemIndex].totalRow =
          state.cartItems[itemIndex].inventory *
          state.cartItems[itemIndex].product.price;
        //update count
        state.count = state.cartItems[itemIndex].inventory;
      }
    },
    clearCart(state, action) {
      state.cartItems = []
      toast.error(`تمامی کالاها از سبد خرید حذف شدند`, {
        position: 'bottom-left',
      })
      localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { product, cartQuantity, inventory } = cartItem
          const itemTotal = product.price * inventory

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        },
      )
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    removeRedux(state, action) {
      return initialState;
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotals,
  removeRedux,
} = cartSlice.actions

export default cartSlice.reducer
