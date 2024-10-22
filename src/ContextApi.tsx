import { createContext, PropsWithChildren, useState } from "react"
interface MyContextType {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
}

export const ctx = createContext<MyContextType | null>(null)

const ContextApi = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState(0)

    return (
        <ctx.Provider value={{ state, setState }}>
            {children}
        </ctx.Provider>
    )
}

export default ContextApi