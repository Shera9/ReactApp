import { colors } from '@material-ui/core';
import react from 'react';
import Images from './Images/batman.gif';

const HTML5 = () =>{

    const year =new Date().getFullYear();

    return(
        <>
        <header style={{border:'5px solid gray',textAlign:"center", color:'gray', fontSize:'30px', backgroundColor:'white', textDecorationColor:'white',zIndex:'2',height:'50px',paddingTop:'5px',boxShadow:' 10px 50px 45px -1px rgba(5,5,5,3,10)'}} className='text_effect' >
        HTML5 Practice <figure className='batman_run'> <img src={Images} alt='Batman' ></img></figure></header>
        <h3 className="text_rotate">Welcome To Shera Techies</h3>
          <span >
           <nav>
           <ul style={{display:'flex',textAlign:'center',paddingLeft:'35%',color:'green',border:'none'}}>
           <ul><a href='#'>
               IMAGE
               </a></ul>
              <ul> <a href='#'>
               News
               </a></ul>
               <ul><a href="#">
               Movies
               </a></ul>
               <ul><a href="#">
               Latest Updates
               </a></ul>
           </ul>
           </nav> </span>
           
         <details style={{flexDirection:'row',marginTop:'0%',color:'white',marginLeft:'1%',marginTop:'1%'}}>
             <summary>How was Your Interview?</summary>
             <p>It was brilliant.</p>
             <p>Nothing was new,everythis was predefined.</p>
         </details>
        
         <figure style={{margin:'1%',padding:'0%'}}>
             <img src='https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68' alt='Oh no Image is fucked up!' className='img_transition' style={{marginLeft:'0px',marginTop:'0px'}}></img>
                 <figcaption style={{fontSize:'30px',color:'darkseagreen'}}>Enticing View</figcaption>
         </figure>
         <main className='paragraph'> This is main content
         <p>Welcome to Shera Techies!</p>
         <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
         </main><br/>
         <footer className="footer_color" style={{padding:'0%',height:'200px',backgroundColor:'gray' ,textAlign:'center',textOrientation:'mixed', color:'white'}}> 
             <ul >
                 <li style={{paddingLeft:'0%',paddingTop:'20px'}}>About us<p style={{fontSize:'18px'}}>SheraTechies</p></li>
                 <li style={{paddingLeft:'30%'}} >Feed Back<p style={{fontSize:'18px'}}>Enticing</p></li>
                 <li style={{paddingLeft:'30%'}}>Baago<p style={{fontSize:'18px'}}>Kahan baagna Hai?</p></li>
             </ul>
         <br/><br/>copyright ® {year} </footer>
        </>
    )
}
export default HTML5;