import React from "react";
import "./Users.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { Button } from "react-bootstrap";
import User from "../User/User";

export default function Users() {
  const users=[{name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, 
    {name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, 
    {name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, 
    {name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, 
    {name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, 
    {name:'سۆران غەفووری' , job:'ئەندازیاری نەوت' , witness:'ماستەری نەوتی زانکۆی تاران' ,honors:'نووسەری کتێبی نەوت لە کوێوە هاتوووه ' , now:'دامەزراوی پاڵاوگەی تیشک'}, ];
  return (
    <div className="users">
      <div className="users-box">
        
      {users.map((user)=>(
            <User name={user.name} job={user.name}  witness={user.witness} honors={user.honors} now={user.now}/>
          ))}

        </div>
    </div>
  );
}
