import React, { useState } from 'react';

function TodoMain(){

    const [list, setList] = useState(["Go to the gym", "Do laundry"]);

    // add items to the list
    function addItem(){
        const newItem = document.getElementById("addItems").value;
        document.getElementById("addItems").value = "";
        setList(l => [...l,newItem]);
    }

    // delete items from the list by tapping on them
    function deleteItem(index){
        setList(list.filter((_, i)=>i!==index));
    }

    // reset the list
    function clearList(){
        setList([]);
    }

    return(<>
        <h1>My To-Do List</h1>
        <ol>
            {list.map((listItem, index) => <li key={index} onClick={deleteItem(index)}>{listItem}</li>)}
        </ol>
        {/*add items*/}
        <input type="text" placeholder='Enter item' id='addItems'/>
        <button onClick={addItem}>Add Item</button>
        <br />

        {/*clear list*/}
        <button onClick={clearList}>Clear List</button>
    </>);
}

export default TodoMain;