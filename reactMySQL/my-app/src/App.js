import React from 'react'
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import RoutesRestuarant from './routes';



function App() {

  return (
  <div className='App'>
<>
  <br />
  <Navbar bg="secondary" variant="secondary">
    <Container>
    <Navbar.Brand href="/"> דף הבית</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/diners">סועדים</Nav.Link>
      <Nav.Link href="/menu">תפריט</Nav.Link>
      <Nav.Link href="/tables">שולחנות</Nav.Link>
      <Nav.Link href="/dinersClass">סועדים class</Nav.Link>
      <Nav.Link href="/menuClass">תפריט class</Nav.Link>
      <Nav.Link href="/tablesClass">שולחנות class</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
<RoutesRestuarant/>
    </div>
  );

}

export default App;
