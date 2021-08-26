import react, { useState } from 'react';


const Forms=()=>{
       
    const[Name,SetName]=useState({
        fname:"",
        lname:"",
        email:"",
        phone:""
    });
    
    const Submit=(changeName)=>{   
         const value=changeName.target.value;
         const name=changeName.target.name;
        //const[value, name]=changeName.target;   
    
   
    SetName((preValue)=>{
       
        if(name==='fName'){
            return{
                fname:value,
                lname:preValue.lname,
                 email:preValue.email,
                 phone:preValue.phone,
            };
        }else if(name==='lName'){
            return{
                fname:preValue.fname,
                lname:value,
                 email:preValue.email,
                 phone:preValue.phone,
            };
        }else if(name==='email'){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                 email:value,
                 phone:preValue.phone,
            };
        }else if(name==='phone'){
            return{
                fname:preValue.fname,
                lname:preValue.lname,
                 email:preValue.email,
                 phone:value,
            };
        }

    })};
    const SubmitName=(event)=>{
        event.preventDefault();
       // console.log('Submitted');
        //SetName(Name.fName);
       // SetName(Name.lName);
    };


    return(
      <>
      <div>
      <form onSubmit={SubmitName}>
      <div>
      <h1 style={{color:'#FF0000',background:'yellow'}}>Welcome To SheraIn, {Name.fname} {Name.lname}</h1>
      <p>{Name.email}</p>
      <p>{Name.phone}</p>
        <input type='Text' placeholder='Enter Your FirstName'
        name='fName'
         onChange={Submit} value={Name.fname}>         
         </input>
         <br/>
         <input type='Text' placeholder='Enter Your LastName'
         name='lName'
         onChange={Submit} value={Name.lname}>         
         </input>
         <br/>
         <input type='email' placeholder='Enter Your email'
         name='email'
         onChange={Submit} value={Name.email}>         
         </input>
         <br/>
         <input type='number' placeholder='Enter Your MobileNumber'
         name='phone'
         onChange={Submit} value={Name.phone}>         
         </input>
         <br/>
        <button type='submit'>Login</button>
        </div>
        </form>
        </div>
        </>
    );
};
export default Forms;