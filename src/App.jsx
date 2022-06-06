import { Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import Couch from "pages/Couch"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/couch" element={<Couch />} />
      </Routes>
    </div>
  )
}

export default App
