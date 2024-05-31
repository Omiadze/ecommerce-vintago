import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <main >
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
