import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home'
import Questions from './pages/Questions'
import Tests from './pages/Tests'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/tests" element={<Tests />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
