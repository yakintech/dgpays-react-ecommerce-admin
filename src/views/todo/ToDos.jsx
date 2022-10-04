import { Table } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux'

function ToDos() {

    //useDispatch!!
    //useSelect

    let state = useSelector(state => state);

    let columns = [
        {
            title:'ID',
            dataIndex:'id'
        },
        {
            title:'Title',
            dataIndex:'title'
        },
        {
            title:'Status',
            dataIndex:'completed'
        },
    ]

  return (<>
    
    <Table columns={columns} dataSource={state}></Table>
  </>)
}

export default ToDos