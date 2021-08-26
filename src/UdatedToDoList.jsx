import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ItemsList from './ItemsList';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const UpdatedToDoList = () =>{

    const[item, setItem]=useState();
    const[emptyArray, setEmptyArray]=useState([]);
    const AddItem = (event) =>{
       setItem(event.target.value);
    }
    const AddToList = () =>{
            setEmptyArray((oldItems)=>{
                return(
                    [...oldItems,item]
                )
            })
            setItem(' ');
    }
    const DeleteItems =(id)=>{
        console.log("deleted");
    
        setEmptyArray((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                 return index!==id;
            })
        })
    
    }

    return(
    <>
      <div className='main_div'>
      <div className='center_div'>
          <input placeholder='Add Item' onChange={AddItem} value={item}></input>
          <Button className='btn_updated' onClick={AddToList}><AddIcon/></Button>
          <ol>
          {emptyArray.map((itemsAdding,index)=>{
                return <ItemsList text={itemsAdding} key={index}></ItemsList>}

            )}
          </ol>
      </div>

      </div>
    </>)

}
export default UpdatedToDoList;