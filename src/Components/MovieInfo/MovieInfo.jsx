import React, { Component } from "react";
import { img_300, noPicture } from "../../defaults/images";
import Calendar from "../calendar";
import "./MovieInfo.css"

class MovieInfo extends React.Component {
    constructor(props){
        super(props)
        this.changeBookingState = this.changeBookingState.bind(this);
        this.state = { id: props.id.match.params.name, movie: null, showBooking: false }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=f05cb163c10b18356ae3d8962baeb237`)
        .then(response => response.json())
        .then(result => {
            this.setState({movie: result})
        })
        
    }

    changeBookingState() {
        this.setState({showBooking: !this.state.showBooking})
    }

    render() {
        const movie = this.state.movie;
        console.log(movie);
        if(!movie) {
            return (<h1>Loading</h1>)
        } else {
            return (
                <div className="cardInfo">
                    <div className="img-info">
                        <img
                            src={movie.poster_path ? `${img_300}/${movie.poster_path}` : noPicture}
                            alt=""
                            className="card__photo"
                        />
                    
                        <div className="film-info">
                            <h1 className="title">{movie.original_title || movie.original_name}</h1>
                            <h2 className="overview">{movie.overview}</h2>
                            <h2 className="rating">Rating: {movie.vote_average}</h2>
                            <button className="button-ticket" onClick={this.changeBookingState}>Buy a ticket</button>
                        </div>
                    </div>    
                    { this.state.showBooking ? <Calendar /> : ''}
                      
                </div>         
            )
            
        }
    }
}

export default MovieInfo;