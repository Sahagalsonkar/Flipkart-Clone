import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { AiFillBell } from "react-icons/ai"
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar bg="#2874f0" expand="lg">
        <Navbar.Brand href="#home">FlipKart</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Login</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <div>
                <IconContext.Provider value={{ style: { fontSize: '30px', color: "rgb(0, 123, 255)" } }}>
                  <div className="flex flex-wrap">
                    <AiFillBell />
                    <NavDropdown.Item href="#action/3.1"> Preferences</NavDropdown.Item>
                  </div>
                </IconContext.Provider>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Sell on FlipKart</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">24*7 Customer Care</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Advertise</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Download App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
