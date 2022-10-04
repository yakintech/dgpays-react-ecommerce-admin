import { Button, Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatusAction, removeAllToDoAction, removeToDoAction } from '../../redux/actions/todo.action';

function ToDos() {

    //useDispatch!!
    //useSelect

    let state = useSelector(state => state.todoReducer);
    
    console.log('STATE', state);

    const dispatch = useDispatch();


    const removeTodo = (id) => {
        dispatch(removeToDoAction(id))
    }

    const removeAll = () => {
        dispatch(removeAllToDoAction())
    }

    const changeStatus = (id) => {
       dispatch(changeStatusAction(id))
    }

    let columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Title',
            dataIndex: 'title'
        },
        {
            title: 'Status',
            dataIndex: 'completed',
            render: (completed) => completed.toString()
        },
        {
            title: 'Remove',
            dataIndex: 'id',
            render: (id) => <Button danger onClick={() => removeTodo(id)}>Remove</Button>
        },
        {
            title:'Change',
            dataIndex:'id',
            render: (id) => <Button onClick={() => changeStatus(id)}>Change Status</Button>
        }
    ]

    return (<>

        <Button onClick={() => removeAll()}>Remove All</Button>
        <Table columns={columns} dataSource={state}></Table>
    </>)
}

export default ToDos