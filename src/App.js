import logo from './logo.svg';
import './App.css';
import Headers from './components/Header/Headers';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Service from './components/Service/Service';
import SKills from './components/Skills/SKills';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Headers/>
      <About/>
      <Service/>
      <SKills/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
