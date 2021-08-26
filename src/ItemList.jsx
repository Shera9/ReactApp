import react from 'react';

const ItemList=(props)=>{

    
    return (
    <>
    <div className='todo_style'>
    <i className='fa_times' aria-hidden='true' onClick={()=>
                      props.onSelect(props.id)} />
    <li>{props.text}</li></div> </>)
}
export default ItemList;