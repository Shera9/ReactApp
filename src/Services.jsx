import react, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Card,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
import { Modal } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const Services = () =>{
  


         return(
             <>
          <div>  
   <div className="container">
      <h1 className="text-center pt-5 text-capitalize" style={{textShadow:"3px 3px 3px gray",marginTop:"5%"}}>Services</h1>
      <hr className="w-25 mx-auto pb-5" ></hr>
       </div>
       
       <div className='container-fluid w-75 row text-center py-5 mx-lg-auto'>
      <div className="col-lg-4 col-md-4 col-12 " >
      <Card >
  <Card.Img variant="top" src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g" className="img_box" />
  <Card.Body>
    <Card.Title>Nature</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View</Button>
  </Card.Body>
</Card>
</div> 
 <div className="col-lg-4 col-md-4 col-12 " >
      <Card >
  <Card.Img variant="top" src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g" className="img_box" />
  <Card.Body>
    <Card.Title>Nature</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View</Button>
  </Card.Body>
</Card>
</div>
 <div className="col-lg-4 col-md-4 col-12 " >
      <Card >
  <Card.Img variant="top" src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g" className="img_box" />
  <Card.Body>
    <Card.Title>Nature</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View</Button>
  </Card.Body>
</Card>
</div>
</div>
<article>
    <div className="bg-primary text-center text-white">
        <h3 className="display-4 ">+923450000006</h3>
        <p>Contact us if you have any query!</p>
        <Button className="text-white bg-warning m-3">Now</Button>
        
    </div>
</article>
      
      </div>
             </>
         )   
}
export default Services;