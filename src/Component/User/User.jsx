import React from 'react'
import './User.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { Button } from "react-bootstrap";
export default function User({name , job, witness , honors , now}) {
  return (
    <div className="user-box">
          <div className="user-box-img">
            <img src="/soran.png" alt="" />
          </div>
          <h3>{name}</h3>
          <p> {job}</p>
          <div className="user-box-text">
            <p>{witness}</p>
            <p>{honors}</p>
            <p>{now}</p>
          </div>
          <Button style={{ backgroundColor: "#CF4E1F", border: "none" }}>
            بینینی سی ڤی
          </Button>
          <hr />
          <div className="user-box-icon">
            <AiFillInstagram style={{ color: "#FF0990" }} />
            <TiSocialLinkedinCircular style={{ color: "" }} />
            <FaTelegram style={{ color: "#0596E0" }} />
          </div>
        </div>
  )
}
