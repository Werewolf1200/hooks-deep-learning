import { useState, useMemo } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterator = 100) => {
    for (let i = 0; i < iterator; i++) {
        console.log('Carga Pesada');
    }

    return `${iterator} iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
      <>
          <h1>Memo</h1>
          <h2>Counter: {counter} </h2>

          <h3>{ memorizedValue }</h3>

          <button
              className='btn btn-primary'
              onClick={ () => increment() }
          >
              +1
          </button>

          <button
              className='btn btn-outline-primary'
              onClick={ () => setShow( !show )}
          >
              Show/Hide {JSON.stringify(show)}
          </button>

          <hr />
      </>
  )
}
