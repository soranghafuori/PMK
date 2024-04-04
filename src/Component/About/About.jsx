import React from 'react'
import './About.css'
import {FiMenu} from 'react-icons/fi'

export default function About() {
  function hidehefer(){
    document.getElementById('about').classList.toggle('show-header')
  }
  return (
    <div className='about' id='about'>
      <FiMenu className="main-page-menu" onClick={()=>hidehefer()}/>
      <div className='about-text'>
        <h1>ئێمە کێین؟</h1>
        <p>ئێمە تیمێکی کوردین بریتی لە چەندین زانای نەوت و زانای بواری سایت</p>
        <p>ئامانجی ئێمە خزمەتە بە گەلی کورد تا بتوانن بە زمانی کوردی زانستە جیهانیەکان لەبەر دەسی هەموان بێت</p>
        <p>بەو هیوایە ئێمەش وەک گەلانی تر بتوانین بە زمانی خۆمان زانستەکانمان لەبەر دەست بێت</p>
        <p>هیوا خوازین ئێوەش لەم ئیشەدا یارمەتی دەری ئێمە بن</p>
      </div>
    </div>
    
  )
}
