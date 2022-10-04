import { Badge, Menu } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { favoritesProductContext } from '../../contexts/favoritesProductContext'

function LayoutHeader() {

    const { favorites } = useContext(favoritesProductContext)

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key={1}><Link to='/'>Dashboard</Link></Menu.Item>
                <Menu.Item key={2}><Link to='/admin/products'>Products</Link></Menu.Item>
                <Menu.Item key={3}><Link to='/admin/addproduct'>Add Product</Link></Menu.Item>
                {/* <Menu.Item key={4}><Link to='/admin/selectSample'>Select Sample</Link></Menu.Item> */}
                <Menu.Item key={5}><Link to='/admin/favorites'> Favorites<Badge count={favorites.length}></Badge></Link></Menu.Item>
                <Menu.Item key={6}><Link to='/admin/addSupplier'> Add Supplier (Formik-Basic)</Link></Menu.Item>
                <Menu.Item key={7}><Link to='/admin/addCategory'> Add Category (Formik-Yup)</Link></Menu.Item>
                <Menu.Item key={8}><Link to='/admin/addCustomer'> Add Customer (React-Hook-Form)</Link></Menu.Item>
                <Menu.Item key={9}><Link to='/admin/memoSample'>Memo Sample</Link></Menu.Item>
                <Menu.Item key={10}><Link to='/admin/todos'>Todos</Link></Menu.Item>
                <Menu.Item key={11}><Link to='/admin/addtodo'>Add Todo</Link></Menu.Item>


            </Menu>
        </Header>
    )
}

export default LayoutHeader