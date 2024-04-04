import React from "react";
import "./Header.css";
import { TbLogin } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {IoCloseSharp} from 'react-icons/io5'

export default function Header() {
  function hidehefer(){
    document.getElementById('header').classList.toggle('show-header')
  }
  return (
    <div className="header " id="header">
      <div className="header-left">
        <NavLink to='/login'>
          <button>
            چوونه ژوورەوە
            <TbLogin className="header-left-icon" />
          </button>
        </NavLink>
        <NavLink>
          <button>
            <MdOutlineShoppingCart className="header-left-icon" />
          </button>
        </NavLink>
      </div>
      <div className="header-main">
        <NavLink to="/">
          <a href="">لاپەڕەی سەرەکی </a>
        </NavLink>
        <NavLink to="/courses">
          <a href="">کۆرسی فێرکاری </a>
        </NavLink>
        <NavLink to="/books">
          <a href="">پەرتووک </a>
        </NavLink>
        <NavLink to="/users">
          <a href=""> ئەندامان </a>
        </NavLink>
        <NavLink to="/about">
          <a href="">ئێمه </a>
        </NavLink>
      </div>
      <div className="header-right">لۆگۆ</div>
      <IoCloseSharp onClick={()=>hidehefer()} className="header-close"/>
    </div>
  );
}
