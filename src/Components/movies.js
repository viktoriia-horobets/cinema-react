import React, { Component } from "react";
import Card from "./card";

export default class Movies extends Component {
    render () {
        return (
            <div>
                <div className='card-list'>
                    <Card />
                </div>
            </div> 
        )
    }
}