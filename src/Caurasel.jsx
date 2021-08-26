import react from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';


const Caurasel = () =>{
    return(

        <>
      <Carousel >
  <Carousel.Item interval={1000} className='img_size'>
    <img
      className="d-block "
      src="https://picsum.photos/536/354"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block "
      src="https://picsum.photos/seed/picsum/536/354"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://c.pxhere.com/photos/7d/11/clouds_thunderstorm_storm_clouds_form_dark_clouds_croatia_dark_sky_storm_clouds-1109871.jpg!d"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </>
    )
}
export default Caurasel;
