import React ,{useEffect, useState}from "react";
import "./BookCard.css";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Book from "../Books/Book";


export default function BookCard({book}) {
  const [imageUrl, setImageUrl] = useState('');
  console.log(window.location.href)
  useEffect(()=>{
    {console.log(book)}
  
  const base64String = book.imagebook.replace(/^data:image\/\w+;base64,/, '');
      
        const binaryData = atob(base64String);
        const uint8Array = new Uint8Array(binaryData.length)
        for(let i=0;i<binaryData.length; i++){
          uint8Array[i] = binaryData.charCodeAt(i)
        }
        
        const blob = new Blob([uint8Array], { type: 'image/png' });
        
        const imageUrl = URL.createObjectURL(blob);
        console.log(imageUrl);
        setImageUrl(imageUrl);
  },[])
  
  return (
    <div className="book">
      <div className="book-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="book-title">
        <h3>{book.namebook}</h3>
        <Button ><Link to={`${book.namebook}?data=${encodeURIComponent(JSON.stringify(book))}`} >زانیاری زۆرتر و داگرتن</Link></Button>
      </div>
    </div>
  );
}
