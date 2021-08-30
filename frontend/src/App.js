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
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView'
function App() {
  return (
    <TemplateProvider>

      <ContextProvider>
        {/* <Router>
      
        <Header />
        <Home/>
      
      

    </Router> */}

        <Router>

          <Header />
          <Box style={{ marginTop: "55px" }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Cart' component={Cart} />
              <Route exact path='/product/:id' component={DetailView} />
            </Switch>
          </Box>

        </Router>
      </ContextProvider>

    </TemplateProvider>


  );
}

export default App;
