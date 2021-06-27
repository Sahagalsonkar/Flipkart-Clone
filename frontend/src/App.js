import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cart from './components/cart/Cart'
import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import Banner from './components/home/Banner';
import { TemplateProvider } from './templates/TemplateProvider';
function App() {
  return (
    <TemplateProvider>
      <Router>

        <Header />
        <Box style={{marginTop:"55px"}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Cart' component={Cart} />
          </Switch>
        </Box>

      </Router>
    </TemplateProvider>


  );
}

export default App;
