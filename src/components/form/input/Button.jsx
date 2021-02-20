import React from 'react';

export const Button = ({handleClick, name })=>{
    return(<button onClick={handleClick}>{name}</button>)
}