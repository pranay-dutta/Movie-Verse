import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Homepage from './pages/Homepage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App