import React, { useState } from 'react';

function TodoMain(){

    const [list, setList] = useState([]);

    // add items to the list


    // delete items from the list by tapping on them


    // reset the list
    return(<>
        <h1>My To-Do List</h1>
        <p>{Date()}</p>
    </>);
}

export default TodoMain;