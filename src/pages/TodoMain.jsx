import React, { useState } from 'react';

function TodoMain(){

    const [list, setList] = useState(["Go to the gym", "Do laundry"]);

    // add items to the list


    // delete items from the list by tapping on them


    // reset the list
    return(<>
        <h1>My To-Do List</h1>
        <p>{Date()}</p>
        <ol>
            {list.map((listItem, index) => <li key={index}>{listItem}</li>)}
        </ol>
    </>);
}

export default TodoMain;