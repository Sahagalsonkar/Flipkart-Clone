import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header/Header';
function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>
  );
}

export default App;
