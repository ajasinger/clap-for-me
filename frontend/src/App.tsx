import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import Settings from './pages/Settings';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-4 flex flex-grow items-center justify-center">
      <Routes>
        <Route path="/" element={ < Home /> } />
        <Route path="/signup" element={ < Signup /> } />
        <Route path="/login" element={ < Login /> } />
        <Route path="/settings" element={ < Settings /> } />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
