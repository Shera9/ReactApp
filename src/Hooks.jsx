import react from 'react';
import { useState } from 'react';


const Hooks=()=>{
    //let curTime=new Date().toLocaleTimeString();
        const state=useState();
        const[count, counter]=useState(0);//Hooks or Use state
         const[curTime, updatedTime]=useState(new Date().toLocaleTimeString());
         
    
         const IncNumber=()=>{
             counter(count+ 1);
         let curTime=new Date().toLocaleTimeString();
             updatedTime(curTime);
         };
         setInterval(IncNumber,1000);
    
         return(
             <>
             <h1>{count}</h1>
             <h1>{curTime}</h1>
             <button onClick={IncNumber}>Click Me</button>
             
             </>
         );
};
export default Hooks;