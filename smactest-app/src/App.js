import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useRank } from './hooks/useRank';

// Pages
import Home from './pages/Home'
import Questions from './pages/Questions'
// import Tests from './pages/Tests'
import Login from './pages/Login';

// Components
import Nav from './components/Nav';

function App() {
  const { rank } = useRank()
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={rank ? <Questions /> : <Navigate to="/"/>} />
          {/* <Route path="/tests" element={<Tests />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
