import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

// malumotlar turagigan joy)
const initialState = {
  cartState: false, // cartMalumotlari turadigan blockni ochish yopish toggleli
  cartItems: localStorage.getItem("cart") // malumot bolsa
    ? JSON.parse(localStorage.getItem("cart")) // malumotni objectga aylansin
    : [], // agar bolmasa bo'sh array bolib tursin
  cartTotalAmout: 0,
}

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      // true
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      // false
      state.cartState = action.payload.cartState
    },
    setAddItemToCart: (state, action) => {
      // cartlarni cartItems arrayga push qilish fuctionid
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        // agar malumot idisi avvalgi id bilan to'g'ri kelsa osha malumotni avvagi malimotbilan 1 ta ko'paytirib qo'yadi
        state.cartItems[itemIndex].cartQuantity += 1
        toast.success(`Item QTY Increased`)
      } else {
        // agar malumot idsi avvalgi id bilan moskelmasa unda yangi malumot yaratilinadi
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)
        toast.success(`${action.payload.title} added to Cart`)
      }

      // malumotlardi localStoragega qo'shish
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )

      state.cartItems = removeItem
      localStorage.setItem("cart", JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} Removed From Cart`)
    },
    setIncreaseItemQTY: (state, action) => {
      // cartlarni cartItems arrayga push qilish fuctionid
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        // agar malumot idisi avvalgi id bilan to'g'ri kelsa osha malumotni avvagi malimotbilan 1 ta ko'paytirib qo'yadi
        state.cartItems[itemIndex].cartQuantity += 1
        toast.success(`Item QTY Increased`)
      }

      // malumotlardi localStoragega qo'shish
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setDecreaseItemQTY: (state, action) => {
      // cartlarni cartItems arrayga push qilish fuctionid
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        // agar malumot idisi avvalgi id bilan to'g'ri kelsa osha malumotni avvagi malimotbilan 1 ta ko'paytirib qo'yadi
        state.cartItems[itemIndex].cartQuantity -= 1
        toast.success(`Item QTY Decrease`)
      }
      // malumotlardi localStoragega qo'shish
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setClearCartItemQTY: (state, action) => {
      state.cartItems = []
      toast.success(`Cart Cleared`)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const totalPrice = price * cartQuantity

          cartTotal.totalAmount += totalPrice
          cartTotal.totalQTY += cartQuantity

          return cartTotal
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      )

      state.cartTotalAmount = totalAmount
      state.cartTotalQantity = totalQTY
    },
  },
})

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItemQTY,
  setGetTotals,
} = CartSlice.actions
export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems

export const selectTotalAmount = (state) => state.cart.cartTotalAmount
export const selectTotalQTY = (state) => state.cart.cartTotalQantity
export default CartSlice.reducer
