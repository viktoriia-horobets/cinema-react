import React, { Component } from "react";
import Card from "./card";
import Carousel from 'react-elastic-carousel';
import "./movies.css"
import HoverVideoPlayer from "react-hover-video-player";


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
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 },
            { width: 1200, itemsToShow: 5 },
          ];
        return ( 
            <div>
                <div className='card-list'>
                    <Carousel breakPoints={breakPoints}>
                        {this.state.movies.map((movie) => {
                            return <Card key={movie.id} {...movie}/>
                        })}
                    </Carousel>
                    {/* <div class="video__preview">
                        <h1 class="video__title">Love & Thunder</h1>
                        <div class="video__info">
                            <h5 class="video__subtitle">THOR: LOVE AND THUNDER | FILMED FOR IMAX®</h5>
                            <h2 class="video__description">Thor: Love & Thunder was Filmed For IMAX. Get your tickets before they're gone.</h2>
                        </div>
                    </div> */}
                    <div className="best-movie">
                        <div className="best-movie-content">
                            <h5 className="title-best-movie">Best movie today:</h5>
                            <h2 class="video__subtitle">THOR: LOVE AND THUNDER | Cooming soon </h2>
                            <h4 class="video__description">Thor: Love & Thunder was Filmed For IMAX. Get your tickets before they're gone.</h4>
                        </div>
                    
                    <HoverVideoPlayer
                        className="hover-video-player-container"
                        videoSrc={[
                            { src: 'preview.mp4', type: 'video/mp4' },
                        ]}
                        
                        pausedOverlay={
                            <img
                            src="https://6a25bbd04bd33b8a843e-9626a8b6c7858057941524bfdad5f5b0.ssl.cf5.rackcdn.com/styles/promo_mobile/rcf/thor_mobile.png?itok=3kxYo4JW"
                            alt=""
                            style={{
                                // Make the image expand to cover the video's dimensions
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            />
                        }
                        loadingOverlay={
                            <div className="loading-overlay">
                            <div className="loading-spinner" />
                            </div>
                            
                        }
                    />
                    </div>
                </div>
            </div> 
        )
    }
}