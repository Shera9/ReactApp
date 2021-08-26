import react from 'react';

const MultiColumn = () =>{

    return(
        <>
        <div className='multi_column'>
            <p>In this section, I'll show you how to display a grid of photos in a FlatList. This component is used to display large quantities of scrollable content and can scroll horizontally or vertically. 

A FlatList uses the renderItem prop to render each item in its input data. The renderItem prop is a function that takes an item from the data array and maps it to a React element. Each item in the data needs a unique id. This is found in item.key by default, though you can specify another way to find or build the id by using the keyExtractor function prop.

We will use useState to append to an array of images. The useState hook can store any type of value: a number, a string, an array, an object, etc. Add the following code to app.js.</p>
        </div>
        </>
    )
}
export default MultiColumn;