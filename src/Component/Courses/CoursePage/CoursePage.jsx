import React from "react";
import "./CoursePage.css";
import { Button } from "react-bootstrap";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";

export default function CoursePage() {
  return (
    <div className="coursepage">
      <div className="coursepage-intro">
        <div className="coursepage-intro-right">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="a">
                <path d="M0 0h1125v1125H0Zm0 0" />
              </clipPath>
            </defs>
            <g
              clipPath="url(#a)"
              transform="matrix(.7936 -.00506 .0031 .48618 -49.005 -256.634)"
              style={{ transformOrigin: "562.5px 562.5px" }}
            >
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2e",
                  fillOpacity: 1,
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                }}
                d="M451.176 759.789h4.619V103.154h-4.619v656.635Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2e",
                  fillOpacity: 1,
                }}
                d="M483.08 761.794h-4.552V105.16h4.552v656.634Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#171717",
                  fillOpacity: 1,
                }}
                d="M66.474 853.806h449.388v-27.821H66.474v27.821Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2e",
                  fillOpacity: 1,
                }}
                d="m300.957 659.939 50.247-104.213 8.325 228.348M246.451 544.409h101.077L296.47 650.332m-65.011 134.804 8.487-235.306 51.872 109.992m-45.14-295.487 44.296 72.089-49.955 83.876m6.244-172.352h96.396l-47.516 79.872-48.88-79.576m98.346 177.244h-97.368l47.969-80.458m53.497 70.084-48.392-78.81 42.961-71.969m25.369 442.728-16.684-459.115v-73.445H237.994v73.445l-16.65 459.115h-7.936v18.922h24.034v-18.922h-6.797v-1.357l65.694-136.276 63.937 135.51.066 2.123h-6.57v18.922h24.035v-18.922h-8.162"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2e",
                  fillOpacity: 1,
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                }}
                d="M303.33 198.997h-15.381v75.506h15.381v-75.506Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#ff892e",
                  fillOpacity: 1,
                }}
                d="M472.868 67.848 134.673 216.091l7.414 56.114 338.262-148.242c8.423-3.716 13.659-19.099 11.609-34.542l-.065-.531c-2.048-15.386-10.601-24.814-19.025-21.042Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#d9d9d9",
                  fillOpacity: 1,
                }}
                d="m136.039 215.384 11.056-4.834-11.056 4.834Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#d97527",
                  fillOpacity: 1,
                }}
                d="m143.421 271.676-7.382-56.292 11.056-4.834 7.481 56.232-11.155 4.894Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#ff892e",
                  fillOpacity: 1,
                }}
                d="M75.841 269.729c12.878 98.319 52.327 218.092 52.327 218.092l26.798-11.671-10.992-200.291-9.041-68.611L95.126 20.751l-26.83 11.552s-5.432 138.99 7.545 237.426Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#d97527",
                  fillOpacity: 1,
                }}
                d="M128.168 487.821S88.719 368.048 75.841 269.729c-7.057-53.522-8.684-119.065-8.684-167.694 0-40.908 1.139-69.732 1.139-69.732l13.593-5.894 59.449 455.637-13.17 5.775Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#cf4e1f",
                  fillOpacity: 1,
                }}
                d="m137.241 329.853 6.538 119.833-16.034 7.015s-18.374-57.589-28.034-110.698l37.53-16.15ZM119.42 194.341l14.049 107.1-37.53 16.15-14.05-107.041 37.531-16.209ZM91.711 52.876 115.615 165.4l-37.531 16.151c-4.553-55.349-2.44-121.662-2.44-121.662l16.067-7.013Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#306b8c",
                  fillOpacity: 1,
                }}
                d="M426.884 825.985h79.19v-37.373h-79.19v37.373Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#2f627f",
                  fillOpacity: 1,
                }}
                d="M466.624 825.985h-39.74v-37.373h39.74v37.373Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#20485e",
                  fillOpacity: 1,
                }}
                d="M435.956 788.612h61.141v-62.656h-61.141v62.656Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#214255",
                  fillOpacity: 1,
                  transformBox: "fill-box",
                  transformOrigin: "50% 50%",
                }}
                d="M435.956 788.612h30.668v-62.656h-30.668v62.656Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2e",
                  fillOpacity: 1,
                }}
                d="M446.005 692.18h41.27v-50.574h-41.27v50.574Zm0 0"
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "#1a1d2d",
                  fillOpacity: 1,
                }}
                d="M466.624 692.18h-20.619v-50.574h20.619v50.574Zm0 0"
              />
            </g>
          </svg>
          <h3>کۆرسی هەڵکۆڵین</h3>
          <p>
            دەرهێنانی نەوت بریتیە لە کۆمەڵێک ئۆپەراسیۆن کە لەم ماوەیەدا نەوتی
            خاو بە شێوازی جیاواز لە زەوی دەردێتە دەرەوە بە مەبەستی دەرهێنان و
            ئیستغلالکردنی.ن.
          </p>
          <div>
            <div className="coursepage-intro-right-icon">
              <PiStudentFill />
              ١٢١ خوێندکار
            </div>
            <div className="coursepage-intro-right-icon">
              <FaChalkboardTeacher />
              ٢٥٥ کۆرس
            </div>
            <div className="coursepage-intro-right-icon">
              <BsClock />
              ٤٩ کاتژمێر
            </div>
            <div className="coursepage-intro-right-icon">
              <MdOutlineSupportAgent />
              یارمەتی{" "}
            </div>
          </div>
          <div>
            <Button>ناو تۆمار کردن</Button>
            <h6>٢٥٠٠٠ دینار</h6>
          </div>
        </div>
        <div className="coursepage-intro-left">
          <video src="/intro.mp4" controls></video>
        </div>
      </div>
      <div className="coursepage-des">
        <div className="coursepage-des-text">
          <h3>Next JS چیست؟</h3>
          <p>
            خلاصه بگویم یک فریم ورک برای React JS است، البته این جمله ممکنه کمی
            گیج کننده باشه وقتی بدانیم که React JS خود یک لایبرری از جاوااسکریپت
            است. اما تا قبل از شروع دوره نیازی نیست درگیر این مفهوم بشید. در کل
            Next JS را میتوان یک مکمل برای React JS در نظر گرفت که یک سری از ضعف
            های آن را بهبود میبخشد و پرفورمنس بالاتری را به برنامه‌ی ما میدهد.
            Next JS توسط Vercel توسعه داده شده است و در میان برنامه نویسان و
            شرکت ها بسیار محبوب و پراستفاده است.
          </p>
        </div>
        <div className="coursepage-des-text">
          <h3>Next JS چیست؟</h3>
          <p>
            خلاصه بگویم یک فریم ورک برای React JS است، البته این جمله ممکنه کمی
            گیج کننده باشه وقتی بدانیم که React JS خود یک لایبرری از جاوااسکریپت
            است. اما تا قبل از شروع دوره نیازی نیست درگیر این مفهوم بشید. در کل
            Next JS را میتوان یک مکمل برای React JS در نظر گرفت که یک سری از ضعف
            های آن را بهبود میبخشد و پرفورمنس بالاتری را به برنامه‌ی ما میدهد.
            Next JS توسط Vercel توسعه داده شده است و در میان برنامه نویسان و
            شرکت ها بسیار محبوب و پراستفاده است.
          </p>
        </div>
        <div className="coursepage-des-text">
          <h3>Next JS چیست؟</h3>
          <p>
            خلاصه بگویم یک فریم ورک برای React JS است، البته این جمله ممکنه کمی
            گیج کننده باشه وقتی بدانیم که React JS خود یک لایبرری از جاوااسکریپت
            است. اما تا قبل از شروع دوره نیازی نیست درگیر این مفهوم بشید. در کل
            Next JS را میتوان یک مکمل برای React JS در نظر گرفت که یک سری از ضعف
            های آن را بهبود میبخشد و پرفورمنس بالاتری را به برنامه‌ی ما میدهد.
            Next JS توسط Vercel توسعه داده شده است و در میان برنامه نویسان و
            شرکت ها بسیار محبوب و پراستفاده است.
          </p>
        </div>
        <div className="coursepage-des-text">
          <h3>Next JS چیست؟</h3>
          <p>
            خلاصه بگویم یک فریم ورک برای React JS است، البته این جمله ممکنه کمی
            گیج کننده باشه وقتی بدانیم که React JS خود یک لایبرری از جاوااسکریپت
            است. اما تا قبل از شروع دوره نیازی نیست درگیر این مفهوم بشید. در کل
            Next JS را میتوان یک مکمل برای React JS در نظر گرفت که یک سری از ضعف
            های آن را بهبود میبخشد و پرفورمنس بالاتری را به برنامه‌ی ما میدهد.
            Next JS توسط Vercel توسعه داده شده است و در میان برنامه نویسان و
            شرکت ها بسیار محبوب و پراستفاده است.
          </p>
        </div>
        <h3>سرفصل ها</h3>

        <div>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        
      </div>
    </div>
  );
}
