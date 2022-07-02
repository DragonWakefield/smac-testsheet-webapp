import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useRank } from './hooks/useRank';
import { useAuthContext } from './hooks/useAuthContext'

// Pages
import Home from './pages/Home'
import Questions from './pages/Questions'
import Sheets from './pages/Sheets'
import Login from './pages/Login';

// Components
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const { rank } = useRank()
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && 
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions" element={rank ? <Questions /> : <Navigate to="/"/>} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path="/sheets" element={user ? <Sheets /> : <Navigate to="/"/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
