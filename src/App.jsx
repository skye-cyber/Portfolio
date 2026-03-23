import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import AIChat from './pages/AIChat'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aichat" element={<AIChat />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App