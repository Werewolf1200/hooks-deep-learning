import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h2>Counter con Hook: {counter}</h2>
            <button
                className='btn btn-primary'
                onClick={() => increment(2)}// Incrementar de 2 en 2. On Click retorna el Objeto del evento por lo que se debe especificar
            >+1</button>
            <button
                className='btn btn-primary'
                onClick={reset}
            >Reset</button>
            <button
                className='btn btn-primary'
                onClick={decrement}
            >-1</button>
            
            <hr />
        </>
  )
}
