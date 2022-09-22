import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
    </div>
  );
}

export default App;
