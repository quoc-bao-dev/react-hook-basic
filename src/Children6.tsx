import Controll from "./components/Controll"
import Display from "./components/Display"
import ContextApi from "./ContextApi"

const Children6 = () => {
    return (
        <ContextApi>
            <Display />
            <Controll />
        </ContextApi>
    )
}

export default Children6