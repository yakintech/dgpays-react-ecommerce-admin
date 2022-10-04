import AddCategory from "../views/category/AddCategory";
import AddCustomer from "../views/customer/AddCustomer";
import Dashboard from "../views/dashboard/Dashboard";
import Parent from "../views/memo/Parent";
import AddProduct from "../views/product/AddProduct";
import Favorites from "../views/product/Favorites";
import ProductList from "../views/product/ProductList";
import UpdateProduct from "../views/product/UpdateProduct";
import SelectSample from "../views/samples/SelectSample";
import AddSupplier from "../views/supplier/AddSupplier";
import AddToDo from "../views/todo/AddToDo";
import ToDos from "../views/todo/ToDos";

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
        path: '/admin/addCustomer',
        element: <AddCustomer />
    },
    {
        path: '/admin/favorites',
        element: <Favorites />
    },
    {
        path: '/admin/memosample',
        element: <Parent />
    },
    {
        path: '/admin/todos',
        element: <ToDos />
    },
    {
        path: '/admin/addtodo',
        element: <AddToDo />
    },
]