import { useContext } from "react"
import { ctx } from "../ContextApi"

const Controll = () => {
    const context = useContext(ctx)

    const increment = () => {
        context?.setState(context.state + 1)
    }
    
    const decrement = () => {
        context?.setState(context.state - 1)
    }
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Controll