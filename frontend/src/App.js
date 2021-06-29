import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cart from './components/cart/Cart'
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import Banner from './components/home/Banner';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
function App() {
  return (
    <TemplateProvider>
    <ContextProvider>
    <Router>
      
        <Header />
        <Home/>
      
      

    </Router>
    </ContextProvider>
    </TemplateProvider>
    
        
  );
}

export default App;
