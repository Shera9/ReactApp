import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';

const AboutUs = () =>{

    return(
        <>
        <div>
   <div className="container">
      <h1 className="text-center pt-5 text-capitalize" style={{textShadow:"3px 3px 3px gray"}}>About Us</h1>
      <hr className="w-25 mx-auto pb-5" ></hr>
  </div>
  <div className='row m-10'>
      <div className="col-lg-6 col-md-6 col-12 w-30" >
          <img src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" className="img-fluid" style={{width:"600px",height:"270px",paddingTop:"5%"}}>

          </img>
      </div>
      <div className="col-lg-6 col-md-6 col-12 w-30" >
          <h1 style={{textDecoration:"bold",paddingTop:"5%"}}>Who Am I!</h1>
          <hr></hr>
          <p style={{textAlign:"justify",wordWrap:"break-word"}}>Shera Techies Offers an efficient,responsive and reliable Web Designing with<br/> hundred percent guaranteed efficiency and quality.Hope for the better <br/>tomorrow!</p>
        <br/>
        <Button>Wanna Know Me</Button>
      </div>
  </div>
  
  </div>
        </>
    )
}
export default AboutUs;