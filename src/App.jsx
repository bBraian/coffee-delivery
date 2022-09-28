import { Header } from "./components/Header"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';

function App() {

  return (
    <BrowserRouter>
      <Router />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Checkout /> */}
    </BrowserRouter>
  )
}

export default App
