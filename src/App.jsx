import React from "react"
import { Hero } from "./components/index"
import { heroapi } from "./data/data.js"

const App = () => {
  return (
    <>
      <main className="bg-">
        <Hero heroapi={heroapi} />
      </main>
    </>
  )
}

export default App
