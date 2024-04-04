import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div>
            <div className='footer-text'>
            <h4>ماڵپەڕی پەتڕۆماڵی کوردستان </h4>
            <p>ماڵپەڕی پەتڕۆماڵی کوردستان شوێنێک بۆکردنەوەی زانسته نەوتیەکان لە سەر کۆرس ، پەرتووک . وە هەر وەها بۆ پەیوەندی باشتر لە نێوان ئەندازیارانی نەوت بۆ وە پرسیار و وڵام لە نێوانیان دا . ئەم ماڵپەڕە شوێنێکە بۆ دۆزینەوەی هەلێ کار بۆ ئەندازیاران و دۆزینەوەی ئەندازیاری باش بۆ کاری کۆمپانیاکان</p>
        </div>
        <div className='footer-part'>
            <h4>بەشەکانی سایت</h4>
            <ul>
                <NavLink to="/courses"><li>کۆرسەکان</li></NavLink>
                <NavLink to="/books"><li>کتێبەکان</li></NavLink>
                <NavLink to="/users"><li>ئەندامان</li></NavLink>
                <NavLink to="/about"><li>سەبارەت بە ئێمە</li></NavLink>
            </ul>
        </div>
        </div>
        <h6>ئەم سایته درووستکراوی <a href="https://ghafuori.ir/">سۆران غەفووریە</a> </h6>
        
    </div>
  )
}
