import react, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ItemsList = (props) =>{
    
    const[Line, setLine]=useState(false);

    const CutItem = () =>{
            setLine(true);
    }

    return (
        <div className='todo_style'>
        <span onClick={CutItem}><DeleteIcon className='delete_btn'/> </span>
        <li style={{textDecoration:Line ?'line-through' : 'none'}}>{props.text} </li>
        </div>
    )
}
export default ItemsList;