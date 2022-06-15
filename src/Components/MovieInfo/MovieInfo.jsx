import React, { Component } from "react";

class MovieInfo extends React.Component {
    constructor(props){
        super(props)

        this.state = { id: props.id.match.params.name, movie: null }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=f05cb163c10b18356ae3d8962baeb237`)
        .then(response => response.json())
        .then(result => {
            this.setState({movie: result})
        })
    }

    render() {
        const movie = this.state.movie;
        console.log(movie);
        if(!movie) {
            return (<h1>Loading</h1>)
        } else {
            return (
                <h1>{movie.original_title || movie.original_name}</h1>
            )
        }
    }
}

export default MovieInfo;