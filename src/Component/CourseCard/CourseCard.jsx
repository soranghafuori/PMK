import React from "react";
import "./CourseCard.css";
import  Button  from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

export default function CourseCard({icon , title , time , price}) {
    
  return (
    
      <div className="cours-box">
      <div className="cours-box-img">
        {icon}
        <h1>{title}</h1>
      </div>
      <div className="cours-box-title">
        <h1>{title}</h1>
        <p>{time}</p>
        <NavLink to='/courses/drilling'><p>بینینی زانیاری زۆرتر</p></NavLink>
        
        <hr />
        <div>
          <Button
            style={{
              color: "#fff",
              backgroundColor: "#CF4E1F",
              border: "none",
            }}
          >
            ناو تۆمار کردن
          </Button>
          <div className="cours-box-title-price">
            <h3>{price}</h3>
            <p>دینار</p>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}
