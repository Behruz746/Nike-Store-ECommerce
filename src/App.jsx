import React from "react"
import {
  Hero,
  Sales,
  FlexContext,
  Stories,
  Footer,
  Navbar,
  Cart,
} from "./components/index"
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js"

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContext endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContext endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
