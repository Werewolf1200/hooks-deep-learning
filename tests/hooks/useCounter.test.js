import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
describe('Pruebas en el useCounter', () => {
    test('Debe retornar los Valores por defecto', () => {
        const { result } = renderHook(() => useCounter()); // Renderiza un Custom Hook
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual( expect.any( Function));
        
    });

    test('Debe general el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        
        expect(result.current.counter).toBe(100);
    
    });

    test('Debe incrementar el valor de contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;

        act(() => {
            increment();
        })

        expect(result.current.counter).toBe(101);

    });

    test('Debe decrementar el valor de contador', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(99);

    });

    test('Debe realizar el reset', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(100);

    });
});