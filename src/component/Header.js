import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Students } from "../Pages/Students";

import { NavLink } from 'react-router-dom';
import '../App.css';

export function Header(){
   return(
    <nav>
    <NavLink  to={'/'} element={<Home/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}     >Home</NavLink>
    <NavLink to={'/Pages/Students'} element={<Students/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>Students</NavLink>
    <NavLink to={'/Pages/Contact'} element={<Contact/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")} >Contact us</NavLink>
  </nav>
   )
}