import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
    <div>
      <Navbar />
      <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/signup" element={ < Signup /> } />
        <Route path="/login" element={ < Login /> } />
      </Routes>
      </div>
    </div>
  )
}

export default App
