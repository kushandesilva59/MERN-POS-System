import './App.css';
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Footer} from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/> 
      <Footer/>
    </div>
  );
}

export default App;
