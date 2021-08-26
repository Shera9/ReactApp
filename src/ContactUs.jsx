import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Footer,Modal,Card,Navbar,Nav,NavDropdown,Form} from 'react-bootstrap';

const ContactUs = () =>{

    const year=new Date().getFullYear();
      return(
          <>
                   <div>  
   <div className="container">
      <h1 className="text-center text-capitalize" style={{textShadow:"3px 3px 3px gray",marginTop:"5%"}}>Contact Us</h1>
      <hr className="w-25 mx-auto pb-5" ></hr>
       </div>
       <Form className="w-50 mx-auto mt-5">
  <Form.Group className="mb-3" id="name">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" aria-autocomplete="off" />
    <Form.Text className="text-muted">
      Name should be in capitalize format.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Father's Name</Form.Label>
    <Form.Control type="text" placeholder="Father's Name" />
  </Form.Group>
  <Form.Group className="mb-3" id="eml">
    <Form.Label>Enter Your Email</Form.Label>
    <Form.Control type="email" placeholder="Email" aria-autocomplete="off" />
    <Form.Text className="text-muted">
      Email should be in proper format.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" id="num">
    <Form.Label>Enter Your Cell Number</Form.Label>
    <Form.Control type="number" placeholder="Enter Cell Number" aria-autocomplete="off" />
    <Form.Text className="text-muted">
      Enter Valid Cell Number.
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="pass">
    <Form.Label>Password</Form.Label>
    <Form.Control type="pass" placeholder="Password" autoComplete="off" autoSave="off" aria-autocomplete="off"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<footer className="text-center bg-dark text-white mt-5 mb-0 ">
    <p>Copyright® {year}</p>
</footer>

       </div>
          </>
      )
}
export default ContactUs;