import React from 'react';
import '../App.css';

export default function Button(props) {
        return(
            <div >
            <button className={props.class} onClick={() => props.passedMethod(props.orbArray)}id='border'>{props.letter}</button>
          </div>
            
        )
    
}