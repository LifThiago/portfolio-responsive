import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id='home'>
        <Home />
      </section>
    </div>
  );
}

export default App;
