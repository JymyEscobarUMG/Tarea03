import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from "./UserProvider"
import { Register } from "./components/Register"
import { Login } from "./components/Login"
import { Home } from "./components/Home"

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
