import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form,Button,NavDropdown,FormControl } from 'react-bootstrap';


const Bootstrap5 = () =>{
    return(
        <>
       <Navbar className=" text-center bg-dark mt-0 text-white" expand="lg">
  <Navbar.Brand href="#" style={{marginLeft:"2%",fontSize:"25px",color:"aquamarine"}}>Bootstrap5</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className=" ms-auto"
      style={{ maxHeight: '100px'}}
      navbarScroll
    >

      <Nav.Link href="#action1" className="navBar_menu" style={{color:"aqua"}}>Home</Nav.Link>
      <Nav.Link href="#action2" className="navBar_menu" style={{color:"aqua"}}>About Us</Nav.Link>
      <NavDropdown title="Menu" id="navbarScrollingDropdown" className="navBar_menu">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#action6" className="navBar_menu" style={{color:"aqua"}}>Gallery</Nav.Link>
      <Nav.Link href="#action7" className="navBar_menu" style={{color:"aqua"}}>Contact Us</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>
        </>
    )
}
export default Bootstrap5;