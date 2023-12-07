import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false
    }];

    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo todo 2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe eliminar un todo', () => {

        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1
        };
   
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);

    });
    
    test('Debe realizar el toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1
        };
   
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });

})