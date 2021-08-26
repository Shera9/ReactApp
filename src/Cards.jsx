import react from 'react';
import cData from './CardsData';
import Heading from './Heading';

function Cards(props){
    return (
   <>
       { <div className='cards'>
       
       <div className='card'>
       <img src={props.imgsrc} alt='Series' className='image'/>
       <div className='card_info'>
       <span className='card_category'>{props.title}</span>
         <Heading sname={props.sname} Heading/>
         <a href={props.link} target='_blank'>
             <button>Watch Now </button>
         </a>
     </div>
     </div>
       </div> }
  
   </>
  
    );
  } 
  
  export default Cards;

