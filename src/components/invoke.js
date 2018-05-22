import React from 'react';
import '../App.css';

export default function Invoke(props) {
        return(
            <div className='invoked'>
                <img className={props.invokedSpellPic} id='border' alt=''/>
            </div> 
        )
    }


