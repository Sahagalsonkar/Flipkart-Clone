import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cart from './components/cart/Cart'
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import Banner from './components/home/Banner';
function App() {
  return (
    <Router>
      
        <Header />
       
        <NavBar/>
        <Banner/>
        

       
     
      
    </Router>
    
        
  );
}

export default App;
