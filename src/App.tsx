import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bodas from './pages/Bodas'
import EventosPrivados from './pages/EventosPrivados'
import Cumpleanos from './pages/Cumpleanos'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bodas" element={<Bodas />} />
        <Route path="/eventos-privados" element={<EventosPrivados />} />
        <Route path="/cumpleanos" element={<Cumpleanos />} />
      </Routes>
    </Router>
  )
}

export default App
