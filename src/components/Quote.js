import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Quote() {
    const [quote, setQuote] = useState("");

    function funcCall() {
      handleClick();
      changeColor();
    }

   function changeColor() {
    let bgAndCol = 'rgb('+ Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    // document.body.style.backgroundColor = 'rgb('+ Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    // document.body.style.color = 'rgb('+ Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
    document.body.style.backgroundColor = bgAndCol;
    document.body.style.color = bgAndCol;

 
  }

    // function handleClick() {
    //     axios.get(`https://type.fit/api/quotes`)
    //     .then((response) =>{
    //         let randomNum = Math.floor(Math.random()* response.data.length);
    //         console.log(response.data[randomNum]);
    //         setQuote(response.data[randomNum]);
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //       })
    // }

    // API call using Fetch Method ---------> 1st approach

    function handleClick() {
        fetch(`https://type.fit/api/quotes`)
        .then((res) => res.json())
        .then((data) =>{
           // console.log(data);
            let randomNum = Math.floor(Math.random()* data.length);
            console.log(data[randomNum]);
            setQuote(data[randomNum]);
        })
    }

    
    useEffect(()=>{
        handleClick();
        changeColor();
    },[])
   
  return (

    <div className='quoteArea my-5'>
      <h2>{quote.text}</h2>
      <p>- {quote.author}</p>
      <button  type="button" className="btn btn-dark mx-3"><a href={`https://twitter.com/intent/tweet?text=hello`}>Tweet</a></button>
      <button onClick={() => funcCall()}  type="button" className="btn btn-dark mx-3 my-2">Get Quote</button>
    </div>
  )
}
