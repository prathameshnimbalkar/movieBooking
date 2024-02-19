// import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
// import { VscAccount } from 'react-icons/vsc';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Header() {
  const[data,setdata]=useState([])
  useEffect(()=>{
    const response=async()=>{
      try {
        const res= await axios.get("http://localhost:8000");
        setdata(res.data);
      } catch (error) {
        console.log(error);
      }
    }
   response();
  })
  

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          My App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <br/>
          <Form className="d-flex">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search Movies here"
              aria-label="Search"
            />
          </Form>
         
          <Nav className="ms-auto">
            <NavDropdown title="Choose City" id="choose-city-dropdown">
              
              
                {
                  data.map((item,index)=>{
                    return <>
                     <NavDropdown.Item key={item.id}>{item.name}</NavDropdown.Item></>
                  })
                }
                       
              {/* <NavDropdown.Item href="#action4">Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Bengaluru</NavDropdown.Item> */}

   

        
            </NavDropdown>
          </Nav>
          
          <Link to="/profile" className="btn btn-success">
  Profile
</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
