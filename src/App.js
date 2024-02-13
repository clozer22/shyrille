import './App.css';
import Index from './components/Pages/Index';
import Particles from './components/Particles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Particles id="tsparticles" />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>

    </Router>
     
  );
}

export default App;