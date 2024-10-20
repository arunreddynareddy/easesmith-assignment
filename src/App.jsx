import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Thankyou from './pages/Thankyou'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/thankyou/:title' element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
