import './App.css';
import About from './components/About';
import Daily from './components/Daily';
import IntroSec from './components/IntroSec';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Feedback from './components/Feedback';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<IntroSec />}>
          </Route>
          <Route path="/daily" element={<Daily />}>
          </Route>
          <Route path="/feedback" element={<Feedback />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
