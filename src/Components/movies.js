import React, { Component } from "react";
import Card from "./card";
import Carousel from 'react-elastic-carousel';

export default class Movies extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/trending/all/day?api_key=f05cb163c10b18356ae3d8962baeb237')
        .then(response => response.json())
        .then(result => {
            const movies = result.results;
            console.log('COMPONENT WILL Mount messages : ', movies)
            this.setState({movies: [...movies]})
        })
    }


    render () {
        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 2 },
            { width: 1200, itemsToShow: 3 }
          ];
        return (
            <div>
                <div className='card-list'>
                    <Carousel breakPoints={breakPoints}>
                        {this.state.movies.map((movie) => {
                            return <Card {...movie}/>
                        })}
                    </Carousel>
                </div>
            </div> 
        )
    }
}