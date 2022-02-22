import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";

export default class Card extends Component {
    render () {
        return (
        
            <div className="card">
                <img className='card__photo' src="https://fantlab.ru/blogfiles/b74269/img/1?r=1631814565" alt="" srcset="" />
                <div className='description'>
                    <h1>Dune</h1>
                    <Button />
                    <div className='text'>
                        
                        <span >Today, 11 Feb</span>
                    </div>
                  
                

                </div> 
            </div>
            
        )
    }
}