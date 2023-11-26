import { useEffect, useState } from "react"
import { Message } from "./Message"


export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'Carlo',
        email: 'carlo@correo.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
        // console.log('useEfect called!!')
    }, []);

    useEffect(() => {
        // console.log('formState changed!!')
    }, [ formState ]);

    useEffect(() => {
        // console.log('email changed!!')
    }, [ email ]);

    return (
        <>
            <h1>Formulario Simple</h1>
            
            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='email@email.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'Carlo2') && <Message />
            }
            
      </>
  )
}
