import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bodas from './pages/Bodas'
import Empresas from './pages/Empresas'
import Universitarios from './pages/Universitarios'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bodas" element={<Bodas />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/universitarios" element={<Universitarios />} />
      </Routes>
    </Router>
  )
}

export default App
