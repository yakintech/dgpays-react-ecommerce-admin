import { Button, Modal, Table, Tooltip } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { networkService } from '../../network/network';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { favoritesProductContext } from '../../contexts/favoritesProductContext';
import { storageHelper } from '../../utils/localStorageService/storageHelper';


const { confirm } = Modal;



function ProductList() {

    console.log('STATE CHANGED!');

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);

    const { favorites, setfavorites } = useContext(favoritesProductContext);

    const navigate = useNavigate();

    useEffect(() => {

        getProducts();

    }, []);

    const addToFavorites = (id) => {

        let favoriteProduct = favorites.find(q => q.id == id);

        if (!favoriteProduct) {
            let favoriteProduct = products.find(q => q.id == id);
            setfavorites([...favorites, favoriteProduct]);
            storageHelper.setFavoriteToStorage([...favorites, favoriteProduct])
        }
        else{
            let filteredFavorites = favorites.filter(q => q.id != id);
            setfavorites([...filteredFavorites])
            storageHelper.setFavoriteToStorage([...filteredFavorites])
        }


    }

    const getProducts = () => {
        networkService.getAll('/products')
            .then(data => {

                setproducts(data);
                setloading(false)


            })
            .catch((err) => {
                console.log('Error', err);
            })
    }

    const deleteProduct = (id) => {

        setloading(true);
        networkService.delete('products', id)
            .then(res => {
                getProducts();
                setloading(false)
            })
            .catch(err => {
                setloading(false);
                console.log('ProductList component network error', err);
                Modal.error({
                    title: 'This is an error message',
                    content: 'NETWORK ERROR!!',
                });
            })

    }

    const showDeleteConfirm = (id) => {

        confirm({
            title: 'Are you sure delete this product?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteProduct(id);
            },
            onCancel() {

            },
        });

    }

    const updateProduct = (id) => {

        navigate('/admin/product/update/' + id);


    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name)

        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            sorter: (a, b) => a.unitPrice - b.unitPrice,
        },
        {
            title: 'Units In Stock',
            dataIndex: 'unitsInStock'
        },
        {
            title: 'Supplier Id',
            dataIndex: 'supplierId'
        },
        {
            title: 'Category Id',
            dataIndex: 'categoryId'
        },
        {
            title: 'DELETE',
            dataIndex: 'id',
            render: (id) => <Button onClick={() => showDeleteConfirm(id)} type="primary-outline" danger>Delete</Button>
        },
        {
            title: 'UPDATE',
            dataIndex: 'id',
            render: (id) => <Button type='primary-outline' onClick={() => updateProduct(id)}>Update</Button>
        },
        {
            title: 'Add To Favorites',
            dataIndex: 'id',
            render: (id) => <Tooltip title="add to favorites">
                <Button onClick={() => addToFavorites(id)} type="primary" shape="circle" icon={favoriteControl(id)} />
            </Tooltip>

        }
    ]

    const favoriteControl = (id) => {
        let favoriteProduct = favorites.find(q => q.id == id);

        if (favoriteProduct)
            return <StarFilled/>;
        else
            return <StarOutlined/>;

    }


    return (<>
        <Table loading={loading} dataSource={products} pagination={{ pageSize: 5 }} columns={columns} rowKey='id'></Table>
    </>
    )
}

export default ProductList