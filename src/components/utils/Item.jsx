import React from "react"
import { useDispatch } from "react-redux"
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice.js"
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

function Item({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) {
  const dispatch = useDispatch()

  const onAddToCart = () => {
    const item = { id, title, text, color, shadow, img, price }
    dispatch(setAddItemToCart(item))
  }

  const onCartToggle = () => {
    dispatch(setOpenCart({ cartState: true }))
  }

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 hover-theme`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 fitler drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center blur-effect-theme bg-white/80 px-1 rounded">
              <h1 className="text-[#000] text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon
                className="icon-style w-5 h-5 md:w-4 md:h-4
              "
              />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={() => onAddToCart()}
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-[#000]"
              onClick={() => {
                onAddToCart()
                onCartToggle()
              }}
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center  ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme  ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[25deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  )
}

export default Item
