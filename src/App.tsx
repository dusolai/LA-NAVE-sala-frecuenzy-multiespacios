import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bodas from './pages/Bodas'
import Empresas from './pages/Empresas'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bodas" element={<Bodas />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
    </Router>
  )
}

export default App
