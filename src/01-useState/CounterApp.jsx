import { useState } from 'react';

// Cambiar el valor del estado en un objeto
export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter; // Extraemos los valores en una variable

  return (
      <>
          <h2>CounterApp</h2>
          
          <h3>Counter1: { counter1 } </h3>
          <h3>Counter2: { counter2 } </h3>
          <h3>Counter3: { counter3 } </h3>
          
          <button
              className='btn'
              onClick={
                  () => setCounter({
                      ...counter, // Desestructuracmos
                      counter1: counter1 + 1, // Elegimos el valor a cambiar
                  })
              }
          
          >+1</button>

          <hr />
      </>
  )
}
