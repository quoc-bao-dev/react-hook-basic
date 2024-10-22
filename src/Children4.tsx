import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }: { onClick: () => void }) => {

    console.log('child render');


    return (
        <div>
            <p>Child</p>
            <button onClick={onClick}>click me!</button>
        </div>
    )
})

// props

const Children4 = () => {
    const [counter, setCounter] = useState(0)

    const [, forceRender] = useState([])
    const render = () => {
        forceRender([])
    }

    const increCounter = () => {
        setCounter(counter + 1)
    }

    console.log('component render');

    // const handleClick = () => {
    //     console.log('handleClick');
    // }

    const handleClick = useCallback(() => {
        console.log('handleClick ', counter);
    }, [counter])
    return (
        <div>
            <button onClick={render}>render</button>
            <br />
            <button onClick={increCounter}>click {counter}</button>

            <Child onClick={handleClick} />
        </div>
    )
}

export default Children4