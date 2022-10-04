import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function AddToDo() {

    const [name, setname] = useState('');

    let dispatch = useDispatch();


    const add = () => {

        let randomId = Math.floor(Math.random() * 1000);

        let newTodo = {
            id: randomId,
            title: name,
            completed: 'false'
        }

        dispatch({ type: 'ADD_TODO', payload: newTodo })
    }


    return (<>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>
    )
}

export default AddToDo