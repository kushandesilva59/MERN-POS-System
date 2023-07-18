import './App.css';
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Footer} from './components/footer/Footer'
import { Header2 } from './components/header/Header2';
import {Home} from './components/home/Home'

function App() {
  return (
    <div className="App">
      <Header2/>
      {/* <About/> 
      <Footer/> */}

      <Home/>
    </div>
  );
}

export default App;
