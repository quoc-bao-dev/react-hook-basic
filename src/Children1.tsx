import { useRef, useState } from "react"

const Children1 = () => {

    const [, forceRender] = useState([])
    const render = () => {
        forceRender([])
    }

    const ref = useRef(0)

    let a = 0

    const increA = () => {
        a++
        console.log('a = ', a);
    }

    const increRef = () => {
        ref.current++
        console.log('ref = ', ref.current);
    }

    return (
        <div>
            <p> a = {a}</p>
            <p> ref = {ref.current}</p>
            <button onClick={increA}>click a</button>
            <button onClick={increRef}>click ref</button>
            <br />
            <button onClick={render}>render</button>
        </div>
    )
}

export default Children1
