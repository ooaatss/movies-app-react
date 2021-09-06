import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Movies from './components/Movies/Movies';
function App() {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Movies/>
    </Router>
  );
}

export default App;
