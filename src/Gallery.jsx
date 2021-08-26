import react, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal,Card,Navbar,Nav,NavDropdown,Form} from 'react-bootstrap';


const Gallery = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <div>  
   <div className="container">
      <h1 className="text-center text-capitalize" style={{textShadow:"3px 3px 3px gray",marginTop:"8%"}}>Gallery</h1>
       <hr className="w-25 mx-auto pb-5" ></hr> 
       </div>
       <div className="row pt-2 mx-lg-auto container-fluid">
       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg" className=" img-fluid"></img>
       </div>
       

       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc" className=" img-fluid"></img>
       </div>

       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y" className=" img-fluid h-100"></img>
       </div>
       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs" className=" img-fluid h-100"></img>
       </div>
       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII" className=" img-fluid h-100"></img>
       </div>
       <div className="col-lg-4 col-md-4 col-12 pt-5">
       <img src="https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc" className=" img-fluid h-100"></img>
       </div>
       <br/>
       </div>
       <div className="bg-primary text-center text-white mt-5 pt-2" >
        <h3 className="display-4 text-truncate" >Want to Join Us!</h3>
        <p>Join Us For more Info💛</p> 
        
        <Button className="text-white bg-warning m-3" onClick={handleShow} variant="primary">Join Us</Button>
    </div>
       <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></Modal.Body>
  

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
       </div>
        </>
    )
}
export default Gallery;