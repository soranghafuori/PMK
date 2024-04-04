import React, { useState } from 'react';
import './Book.css'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import base64js from 'base64-js';

function Book (){
    const [pdfBook,setPdfBook] = useState()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const book = JSON.parse(queryParams.get('data'));
    console.log(book)
    
    async function downloadPdf(){
       const response=await axios.get(`http://193.57.136.149:3001/admin/books/${book.namebook}`)
        await setPdfBook(response.data[0].filebook)
console.log("jhbj")
if (!pdfBook) {
    console.error('PDF data is undefined or null.');
    return;
  }

  // Convert base64 to binary
  const binaryData = base64js.toByteArray(pdfBook);

  // Create a Blob from the binary data
  const blob = new Blob([binaryData], { type: 'application/pdf' });

  // Create a data URL
  const url = URL.createObjectURL(blob);

  // Create an anchor element
  const a = document.createElement('a');
  a.href = url;
  a.download = 'downloaded.pdf';

  // Append the anchor to the document and trigger a click event
  document.body.appendChild(a);
  a.click();

  // Remove the anchor from the document
  document.body.removeChild(a);

  // Revoke the URL to free up resources
  URL.revokeObjectURL(url);
          
    }
    

    return(
        <>
        <div className='book-page'>
            <div className='book-page-top'>
                <div className='book-page-title'>
                    <img src={book.imagebook} alt={book.title} />
                </div>
                <div className='book-page-inf'>
                    <h1>ناوی کتێب: {book.namebook}</h1>
                    {/* <h3>نووسەر:  {book.author}</h3> */}
                    <h3>سالی لەچاپدان:  {book.yearbook}</h3>
                    <h3>سەبارت به :  {book.aboutbook}</h3>
                    <p>زانیاری :  {book.infobook}</p>
                </div>
            </div>
            <div className='book-page-buttom'>
                <a className='book-page-buttom-button' onClick={downloadPdf}>داگرتنی کتێب</a>
            
            </div>
        </div>
        

        </>
    )
}
export default Book