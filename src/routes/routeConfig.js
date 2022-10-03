import AddCategory from "../views/category/AddCategory";
import Dashboard from "../views/dashboard/Dashboard";
import AddProduct from "../views/product/AddProduct";
import Favorites from "../views/product/Favorites";
import ProductList from "../views/product/ProductList";
import UpdateProduct from "../views/product/UpdateProduct";
import SelectSample from "../views/samples/SelectSample";
import AddSupplier from "../views/supplier/AddSupplier";

export const routeConfig = [
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/admin/products',
        element: <ProductList />
    },
    {
        path: '/admin/addproduct',
        element: <AddProduct />
    },
    {
        path: '/admin/product/update/:id',
        element: <UpdateProduct />
    },
    // {
    //     path:'/admin/selectSample',
    //     element:<SelectSample/>
    // },
    {
        path: '/admin/addSupplier',
        element: <AddSupplier />
    },
    {
        path: '/admin/addCategory',
        element: <AddCategory />
    },
    {
        path: '/admin/favorites',
        element: <Favorites />
    },
]