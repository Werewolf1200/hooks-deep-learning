import { useForm } from "../hooks/useForm";

export const CustomHookForm = () => {
    
    const { onInputChange, onResetForm, username, email, password } = useForm({ // ...formState desestructurado del form
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            
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

            <input
                type="password"
                className='form-control mt-2'
                placeholder='Tu password'
                name='password'
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
            
            <hr />
            
      </>
  )
}
