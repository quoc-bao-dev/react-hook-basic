import { useMemo, useState } from "react";

const Children3 = () => {

    const [, forceRender] = useState([])

    const fibonacci = (n: number): number => {
        if (n <= 1) return n;
        return fibonacci(n - 2) + fibonacci(n - 1);
    }

    const render = () => {
        forceRender([])
    }

    console.log('component render');

    // const fb = fibonacci(44)
    const fb = useMemo(() => fibonacci(4), [])

    console.log('fb = ', fb);


    return (
        <div>
            <p>fibonacci = {fb}</p>
            <button onClick={render}>render</button>
        </div>
    )
}

export default Children3