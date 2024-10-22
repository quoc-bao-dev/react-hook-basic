import { useContext } from "react"
import { ctx } from "../ContextApi"

const Display = () => {
    const context = useContext(ctx)
    return (
        <div>
            <p>Context value: {context?.state}</p>
        </div>
    )
}

export default Display