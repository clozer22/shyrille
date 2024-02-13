import './App.css';
import Index from './components/Pages/Index';
import video from './assets/audio2.mp3'
import Particles from './components/Particles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Particles id="tsparticles" />
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
      <audio src={video} autoPlay loop />

    </Router>
     
  );
}

export default App;