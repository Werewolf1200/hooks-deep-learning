import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
        (argument) => {
            setCounter((value) => value + argument);
        },
        [],
    )

  return (
      <>
          <h1>useCallback Hook</h1>
          <h2>useCallbackHook: {counter} </h2>
          
          <ShowIncrement increment={incrementFather} />
          
          <hr />
      </>
  )
}
