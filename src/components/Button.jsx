import React from 'react';

const Button = ({changeAuthor, color}) => {
    return (
        <div className='btn-card'>
        <button onClick={changeAuthor} style={{background: color}}><i className="fa-solid fa-angle-right"></i></button>
   </div>
    );
};

export default Button;