import Main from "./Component/Main/Main";
import Courses from './Component/Courses/Courses';
import Books from './Component/Books/Books';
import Book from './Component/Books/Book';
import About from './Component/About/About';
import Users from './Component/Users/Users';
import Login from "./Component/Login/Login";
import CourseDrilling from "./Component/Courses/CourseDrilling/CourseDrilling";
import E404 from "./Component/404/404";
import AdminPanel from "./Component/AdminPanel/AdminPanel";

const routes=[
    {path:"/" , element:<Main />},
    {path:"/courses" , element:<Courses />},
    {path:"/courses/drilling" , element:<CourseDrilling />},
    {path:"/books" , element:<Books />},
    {path:"/books/:namebook" , element:<Book />},
    {path:"/about" , element:<About />},
    {path:"/users" , element:<Users />},
    {path:"/login" , element:<Login />},
    {path:"/adminpanel", element:<AdminPanel />},
    {path:"*" , element:<E404 />},
]


export default routes;