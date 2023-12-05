import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fruits from './Fruits'


function App() {
  const fruits = [
    {
      fName: "Banana",
      price: 10,
    },
    {
      fName: "apple",
      price: 10,
    },
    {
      fName: "kiwi",
      price: 10,
    },
    {
      fName: "dragonfruit",
      price: 10,
    },
    {
      fName: "watermelon",
      price: 10,
    },
  ]
  return (
    <div className=''>
      {fruits.map((fruit, index) => {
        return (
          <Fruits key={index} fName={fruit.fName} price={fruit.price} />
        )
      })}
    </div>
  );

}

export default App
