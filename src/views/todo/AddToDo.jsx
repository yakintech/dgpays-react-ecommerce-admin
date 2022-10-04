import { Checkbox } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDoAction } from '../../redux/actions/todo.action';

function AddToDo() {

    const [name, setname] = useState('');
    const [completed, setcompleted] = useState(false)

    let dispatch = useDispatch();

  

    const add = () => {

        let randomId = Math.floor(Math.random() * 1000);

        let newTodo = {
            id: randomId,
            title: name,
            completed: completed
        }

        dispatch(addToDoAction(newTodo))
    }


    return (<>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <Checkbox onChange={(e) => setcompleted(e.target.checked)}>Checkbox</Checkbox>
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>
    )
}

export default AddToDo