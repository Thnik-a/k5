import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./cw1/Hello.jsx";
import Greet from "./cw1/Greet.jsx";


function App() {


  return (
    <>
     <h1>Witaj w React!!</h1>
        <Hello/>
        <Greet imie={"Alexios"}  wiek={2000}></Greet>
    </>
  )
}

export default App
