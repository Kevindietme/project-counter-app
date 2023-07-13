import { useState } from "react";

export default function Counter () {

  const [number, setNumber] = useState(0);

  return (
    <section className="main-container">
      <h1>{number}</h1>
      <button onClick={ () => {setNumber(number + 1)} }>+</button>
      <button onClick={ () => {setNumber(number - 1)} }>-</button>
      <button onClick={ () => {setNumber(0) } }>Reset</button>
    </section>
  )
}