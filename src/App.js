import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/FooterSection/FooterPart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
