import quotes from "../quotes.json"
import React, { useState } from 'react';
import Button from "./Button";


const colors = [
    "#845EC2", "#D65DB1", "#FF6F91","#FF9671","#FFC75F","#F9F871","#4B4453","#B0A8B9","#C34A36","#FF8066","#00C9A7","#4D8076","#926C00"
  ];

const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random);

    const changeAuthor = () =>{
        const random = Math.floor(Math.random() * quotes.length);
        setIndex(random);
    }

    const randomColorIndex = Math.floor(Math.random()* colors.length);
    const color = colors[randomColorIndex];

    document.body.style = `background: ${color}`;
    

    return (
        <div className="card"  style={{color: color}}>
            <p> <i className="fa-solid fa-quote-left fa-3x iconCard"></i>{quotes[index].quote}</p>
            <p className="text-Author" >{quotes[index].author}</p>
            <Button changeAuthor={changeAuthor} color={color}/>
        </div>
    );
};

export default QuoteBox;