// import { Button } from 'react-bootstrap';
import BookCard from '../BookCard/BookCard';

// import { response } from 'express';


import React ,{useState ,useEffect}from "react";
import axios from 'axios';
import {FiMenu} from 'react-icons/fi';
import Form from "react-bootstrap/Form";
import './Books.css'
import GetData from "../../GetData/GetData";


export default function Books(){
  const [books , setBooks] = useState()
  const [loading , setLoading] = useState(true)
  const [databooks ,setDatabooks] = useState()
  
  function hidehefer(){
    document.getElementById('books').classList.toggle('show-header')
  }

 const getData = () => {
      
      axios.get('https://193.57.136.149:3001/admin/books').then((respnose) => {
        setBooks(respnose?.data) 
        setLoading(false)
      })
      // await setBooks(response.data)
      // await console.log(books)
      // await setLoading(false)
    }
      // getData()
      useEffect(()=>{
        getData()
      },[])
  return(
    <>
     <div className="books" id='books'>
       <FiMenu className="main-page-menu" onClick={()=>hidehefer()}/>
    {loading ? (
        <p>loading</p>
      ):(
        
      <div className="books-box">
        <div className="books-box-left">
          <h1>کتێبەکان</h1>
          <Form.Select
            style={{ marginTop: "2rem", width: "60%" }}
            aria-label="Default select example"
          >
            <option> بابەتی کتێبەکان </option>
            <option value="1">هەڵکۆڵین</option>
            <option value="2">پاڵاوگە</option>
            <option value="3">نەوت و کیمیا</option>
          </Form.Select>
        </div>
        <div className="books-box-right">
          {books.map((book)=>(
            <BookCard book={book}/>
            
          ))}
        </div>
      </div>
      )}
      
    </div>
    </>
  )
}
