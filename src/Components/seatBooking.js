import React, { Component } from "react";
import Seat from "./seat";
import { SeatList } from "./seatList";

export default class SeatBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {seats: SeatList}
        this.bookSeat = this.bookSeat.bind(this);
    }

    bookSeat(id) {
        let newSeats = this.state.seats.map((row) => {
            return row.map((seat) => {
                if(seat.id === id){
                    let edited = seat
                    edited.status = seat.status === 'booking' ? 'free' : 'booking'
                    return edited;
                }
                return seat;
            })
        })
        this.setState({seats: newSeats}) 
    }

    render () {
        return (
            <div className='seat-booking'>
                {this.state.seats.map((row, index) =>
                    <div key={index } className='seat-row'>
                        {
                            row.map((seat) => 
                                <Seat 
                                    key={seat.id} 
                                    seat={seat} 
                                    onClick={this.bookSeat}/> 
                            )
                        }
                    
                    </div>
                )}
                
            </div>
            
        )

    }

}