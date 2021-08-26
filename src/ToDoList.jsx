import React, { useState } from 'react';
import ItemList from './ItemList';


const ToDoList = () => {

const[inputList,setInputList]=useState();

const[items,setItems]=useState([]);

const ItemEvent = (event) =>{
    setInputList(event.target.value);
};

const AddItems = () =>{
    setItems((ExistingItems) =>{
        return[...ExistingItems,inputList];
    });
    setInputList('');

}

const DeleteItems =(id)=>{
    console.log("deleted");

    setItems((ExistingItems)=>{
        return ExistingItems.filter((arrElement,index)=>{
             return index!==id;
        })
    })

}

    return(
        <>
        <div className='main_div'><br/>
        <div className='center_div'><br/>
        <h1>ToDo List</h1><br/>
        <input type='text' placeholder='Add items' onChange={ItemEvent} value={inputList} />
        <button onClick={AddItems}>+</button>
        <ol>
           
            {items.map((itemsAdding,index)=>{
                return <ItemList key={index} id={index} text={itemsAdding} onSelect={DeleteItems}/>

            })}
        </ol>

        </div>

        </div>
        </>
    )
}
export default ToDoList;