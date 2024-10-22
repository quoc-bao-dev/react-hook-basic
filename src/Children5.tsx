import { useEffect, useReducer } from "react";

interface IState { count: number, isLoading: boolean }
interface IAction { type: 'increment' | 'decrement' | 'done' }

const initialState: IState = { count: 0, isLoading: true };
const reducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            if (state.count === 0) {
                return state;
            }
            return { ...state, count: state.count - 1 };

        case 'done': return { ...state, isLoading: false }
        default:
            throw new Error();
    }
}

// redux

const Children5 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    console.log('component render');

    const increment = () => {
        dispatch({ type: 'increment' })
    }
    const decrement = () => {
        dispatch({ type: 'decrement' })
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'done' })
        }, 1000);
    }, [])
    return (
        <div>
            {state.isLoading && <p>Loading...</p>}
            <p>Count: {state.count}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Children5