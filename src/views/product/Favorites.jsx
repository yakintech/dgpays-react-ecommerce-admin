import { Button, Table } from 'antd'
import React, { useContext } from 'react'
import { favoritesProductContext } from '../../contexts/favoritesProductContext'
import { storageHelper } from '../../utils/localStorageService/storageHelper';

function Favorites() {

    const { favorites, setfavorites } = useContext(favoritesProductContext);


    const removeProduct = (id) => {

        let filteredFavorites = favorites.filter(q => q.id != id);

        setfavorites([...filteredFavorites]);
        storageHelper.setFavoriteToStorage([...filteredFavorites])

    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Remove',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => removeProduct(id)} type='primary' danger>Remove</Button>
        },
        
    ]

    return (<>

        <Table columns={columns} dataSource={favorites}></Table>
    </>
    )
}

export default Favorites