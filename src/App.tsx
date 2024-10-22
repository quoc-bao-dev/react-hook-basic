import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Children1 from "./Children1"
import Children2 from "./Children2"
import Children3 from "./Children3"
import Children4 from "./Children4"
import Children5 from "./Children5"

const App = () => {
  return (
    <div>
      <header>
        <h2>React Foundation</h2>
      </header>

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/children-1">Children 1</Link>
          <Link to="/children-2">Children 2</Link>
          <Link to="/children-3">Children 3</Link>
          <Link to="/children-4">Children 4</Link>
          <Link to="/children-5">Children 5</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Children1 />} />
          <Route path="/children-2" element={<Children2 />} />
          <Route path="/children-3" element={<Children3 />} />
          <Route path="/children-4" element={<Children4 />} />
          <Route path="/children-5" element={<Children5 />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <h3>React Foundation</h3>
      </footer>
    </div>

  )
}

export default App