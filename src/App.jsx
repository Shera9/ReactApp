import react, { useState } from "react";
import Cards from './Cards';
import cData from "./CardsData";
import Hooks from "./Hooks";
import Forms from "./Forms";
import SpreadOperator from "./SpreadOperator";
import ToDoList from "./ToDoList";
import IncreAndDcre from "./IncreAndDcre";
import UpdatedToDoList from "./UdatedToDoList";
import HTML5 from "./HTML5";
import MultiColumn from "./MultiColumns";
import NavBar from "./NavBar";
import Caurasel from "./Caurasel";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Bootstrap5 from "./Bootstrap5";

function App(){

return(
    <>
     
    {/* {/* <HTML5/> 
        
    <MultiColumn/>*/}
    
    {/* <NavBar/>
    <Caurasel/>
    <AboutUs/>
    <Services/>
    <Gallery/>
    <ContactUs/> */}
    <Bootstrap5/>
    
</>
);

}

/* <h1 className='heading_style'>List Of Top Four Netflix Series</h1>
    {cData.map((val,index)=>{

        return(
            
            <Cards 
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
             />
        );
    }
        
        
        )} */
        


export default App;

