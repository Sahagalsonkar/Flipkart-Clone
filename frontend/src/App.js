import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header/Header';
import Cart from './components/cart/Cart'
function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route to="/Cart" >
          <Cart />

        </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
