import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Qoutes from './components/Qoute';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f2f2f2', padding: '10px 20px',
      }}
      >
        <div style={{ fontWeight: 'bold' }}>
          <span>Math Magicians</span>
        </div>
        <ul style={{
          display: 'flex', listStyleType: 'none', margin: 0, padding: 0,
        }}
        >
          <li style={{ marginRight: '10px' }}><Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link></li>
          <li style={{ marginRight: '10px' }}><Link to="/calculator" style={{ color: '#333', textDecoration: 'none' }}>Calculator</Link></li>
          <li><Link to="/Qoutes" style={{ color: '#333', textDecoration: 'none' }}>Qoute</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Qoutes" element={<Qoutes />} />
      </Routes>
    </div>
  );
}

export default App;
