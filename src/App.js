import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Movies from './components/Movies/Movies';
import MovieSelected from './components/Movies/Movie/MovieSelected';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Hero />
          <Movies />
          <Footer />
        </Route>
        <Route path='/movie/:id'>
          <Navbar />
        <MovieSelected/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
