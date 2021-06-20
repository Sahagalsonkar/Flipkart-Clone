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
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          
          
        </Switch>

       
     
      
    </Router>
    
        
  );
}

export default App;
