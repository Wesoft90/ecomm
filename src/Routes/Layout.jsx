import React from 'react'
import { createBrowserRouter} from 'react-router'
import NotFound from './NotFound';
import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Service from '../pages/Service';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:
    [
    {
        path:"",
        index:true,
        element:<Home />
    },        
   
    {
        path:"/about",
        element:<About />
    },
     {
        path:"/service",
        element:<Service />
    },
    {
        path:"/product",
        element:<Products />
    },
    {
        path:"/contact/:work?",
        element:<Contact />
    }, 
     {
        path:"/login",
        element:<Login />
    }, 
     {
        path:"/register",
        element:<Register />
    }, 
    ]},   
    
    {
        path:"*",
        element:<NotFound />
    }
])



export default router;