import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../images/logo.png'
import styles from './Navbar.module.css'

const NavBar = (props) => {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(inputValue);
    setInputValue("")


  };
  return (
    <Navbar className='bg-dark navbar-dark fixed-top' expand="lg">
      <Container fluid>
        <Navbar.Brand className={styles.nav_brand}  href="#"><img src={Logo} alt = "" /> <span>News</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="www.givansot.com" target="_blank">Owner</Nav.Link>
            <Nav.Link href="#modal">About</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name = 'inputSearch'
              value = {inputValue}
              onChange={(event) =>
                setInputValue(event.target.value)
              }
            />
            <Button type='submit' variant="outline-info">Search</Button>
          </Form>
            <h2 style={{color: 'white'}}>Message: {message}</h2>
            {props.onSubmit(message)}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;