import { useState } from "react";
import React from 'react';
import "./AdminPanel.css"
import axios from 'axios';


function AdminPanel(){
    const [name , setName] = useState('')
    const [year,setYear ] = useState()
    const [about ,setAbout ] = useState('')
    const [info ,setInfo ] = useState('')
    const [image ,setImage ] = useState('')
    const [file ,setFile ] = useState()
    const [price ,setPrice ] = useState()

    async function addBook(){
        const newBook = [{'namebook':name ,'yearbook':year , 'aboutbook':about , 'infobook':info , 'pricebook':price , 'imagebook':image , 'filebook':file}]
        const response = await axios.post('http://193.57.136.149:3001/admin/newbook' , newBook)
        .then(response=>{console.log("post data is ok",response.data)})
        .catch(error=>{console.log('error ' , error.message)})
    }

    function coverToBase64(e){
        
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result)
            setImage(reader.result)
        };
        reader.onerror=error=>{
            console.log("Error", error)
        }
    }
    function coverToBase64pdf(e){
        
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result)
            setFile(reader.result)
        };
        reader.onerror=error=>{
            console.log("Error", error)
        }
    }

    return(
        <>
            <div className='adminopanel'>
                <div className='adminopanel-book'>
                    <h3>زیادکردنی کتێب</h3>
                    <input onChange={(e)=>setName(e.target.value)} name="namebook" type="text" placeholder='ناوی کتێب'/>
                    <input onChange={(e)=>setYear(e.target.value)} name="yearbook" type="text" placeholder='ساڵی له چاپدان'/>
                    <input onChange={(e)=>setAbout(e.target.value)} name="aboutbook" type="text" placeholder='سەبارەت به'/>
                    <input onChange={(e)=>setInfo(e.target.value)} name="infobook" type="text" placeholder='زانیاری زیاتر'/>
                    <input onChange={(e)=>setPrice(e.target.value)} name="pricebook" type="text" placeholder="نرخ"/>
                    <input onChange={(e)=>coverToBase64(e)} name="imagebook" type="file" />
                    <input onChange={(e)=>coverToBase64pdf(e)} name="filebook" type="file" />
                    <button onClick={()=>addBook()}>add book</button>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;