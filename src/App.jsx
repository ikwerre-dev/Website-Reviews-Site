import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<p>Not FOund</p>} />

      </Routes>
    </Router>
  );
}

export default App;
