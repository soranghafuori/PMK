import React from "react";
import Form from "react-bootstrap/Form";
import "./Courses.css";
import CourseCard from "../CourseCard/CourseCard";
import { GiOilPump } from "react-icons/gi";
export default function Courses() {
  const courses = [{ icon: <GiOilPump/>, title: "کۆرسی هەڵکۆڵین", time: "٢٤:٣٥:٠٠", price: "٩٩٠٠٠" },
  { icon: <GiOilPump/>, title: "کۆرسی هەڵکۆڵین", time: "٢٤:٣٥:٠٠", price: "٩٩٠٠٠" },
  { icon: <GiOilPump/>, title: "کۆرسی هەڵکۆڵین", time: "٢٤:٣٥:٠٠", price: "٩٩٠٠٠" }];
  return (
    <div className="courses">
      <div className="courses-box">
        <div className="courses-box-left">
          <h1>کۆرسەکانی فێرکاری</h1>
          <Form.Select
            style={{ marginTop: "2rem", width: "60%" }}
            aria-label="Default select example"
          >
            <option> بابەتی کۆرسەکان </option>
            <option value="1">هەڵکۆڵین</option>
            <option value="2">پاڵاوگە</option>
            <option value="3">نەوت و کیمیا</option>
          </Form.Select>
        </div>
        <div className="courses-box-right">
          {courses.map((course)=>(
            <CourseCard icon={course.icon} title={course.title} time={course.time} price={course.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}
