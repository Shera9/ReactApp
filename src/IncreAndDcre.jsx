import react, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncreAndDcre=()=>{
 
    const[initial,upDated] =useState(0);

    const Incre =()=>{
        upDated(initial+1);
    }
   const Decre =()=>{
       if(initial!=0){
           upDated(initial-1);
       }
       else{
           alert("Maximum limit reached");
       }
       
   }


    return(
        <>
         <div className='main_div'>
         <div className='center_div'>
          <h1>{initial}</h1>
         
          <div>
          <Tooltip title="Add" aria-label="add">
           <Button className='btn_inre' onClick={Incre} ><AddIcon/></Button></Tooltip>
           <Tooltip title="Delete">
           <Button onClick={Decre} className='btn_decre'><RemoveIcon/></Button>
          </Tooltip>
          </div>

         </div> 
         
         
         </div>
        </>
    )
}
export default IncreAndDcre;