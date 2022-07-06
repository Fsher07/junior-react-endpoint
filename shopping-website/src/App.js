import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';

function App() {
  return (
    <div className="App">
      <Home />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
          <Route path="/kids" component={Kids} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
