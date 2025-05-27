import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import About from './About'
import Binchutle from './Binchutle'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/binchutle" element={<Binchutle />} />
      </Routes>
    </Router>
     
  )
}

export default App
