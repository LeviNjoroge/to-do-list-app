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
    <div className="listApp">
            <h1>My To-Do List</h1>
            <div className="listItems">
                <ol>
                    {list.map((listItem, index) => <li key={index} onClick={()=>deleteItem(index)}>{listItem}</li>)}
                </ol>
            </div>
            {/*add items*/}
            <input type="text" placeholder='Enter item' id='addItems'/>
            <button onClick={addItem}>Add Item</button> <br />  

            {/*clear list*/}
            <button onClick={clearList}>Clear List</button>
            <br /><br />
            <p>Welcome to the To-do list app, <br />To get started, tap on the <b>Clear List</b> button to get rid of all the current placeholder values <br />Add an item to your list by typing it in the input box below and clicking the <b>Add item</b> button <br />You can delete an item by simply <b>tapping on the item</b> <br />Enjoy, and stay disciplened :)</p>
    </div>
    </>);
}

export default TodoMain;