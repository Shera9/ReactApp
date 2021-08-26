import react, { useState } from "react";




const SpreadOperator = () =>{

const[fullName,setFullName]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
});
 const InputEvent = (Event) =>{
     //const[value,name]=Event.target;
    const value=Event.target.value;
    const name=Event.target.name;

setFullName((preValue)=>{
    return{ ...preValue,
      [name]:value,
    };
});


}

  const SubmitApp=(prevent)=>{
       prevent.preventDefault();
       console.log('Submitted');
      }


return(
    <>
            <div>
                <form onSubmit={SubmitApp}>
                    <div>
                    <h1 style={{fontStyle:'italic', color:'red', background:'pink'}}>Hello,{fullName.fname} {fullName.lname}</h1>
                    <p style={{color:'navy'}}>{fullName.email}</p>
                    <p style={{color:'chocolate'}}>{fullName.phone}</p>
                        <input type='text' placeholder='Enter your FirstName' 
                         onChange={InputEvent} 
                          name='fname'
                          value={fullName.fname}></input>
                            <br/>
                            <input type='text' placeholder='Enter your LastName' 
                         onChange={InputEvent} 
                          name='lname'
                          value={fullName.lname}></input>
                            <br/>
                            <input type='email' placeholder='Enter your Email' 
                         onChange={InputEvent} 
                          name='email'
                          value={fullName.email}></input>
                            <br/>
                            <input type='number' placeholder='Enter your Cell Number' 
                         onChange={InputEvent} 
                          name='phone'
                          value={fullName.phone}></input>
                            <br/>
                            <button type='SubmitApp'>Submit</button>
                    </div>
                </form>
            </div>
    </>
)}
export default SpreadOperator;
