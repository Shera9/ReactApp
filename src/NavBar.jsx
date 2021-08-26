import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';


const NavBar = () =>{
     return(
         <>
 <Navbar  expand="lg" className=" bg-success">
  <Navbar.Brand href="#" style={{color:'white',marginLeft:"2%",fontSize:"30px",textShadow:"3px 3px 3px black"}}>SheraTechies</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="m-lg-auto my-2 my-lg-0 text-white "
      style={{ maxHeight: '100px',color:'white' }}
      navbarScroll
    >
      <Nav.Link href="#action1" style={{color:'white',fontSize:"20px"}}>Home</Nav.Link>
      <Nav.Link href="#action2" style={{color:'white',fontSize:"20px"}}>News</Nav.Link>
      <NavDropdown className="catagories" title="Catagories " style={{color:'white',fontSize:"20px"}} id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Latest</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Find Out</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled style={{color:'white',fontSize:"20px"}} >
        Updates
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-primary" className="mx-2">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
         </>
     )
}
export default NavBar;