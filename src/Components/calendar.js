import React, { Component } from "react";
import Seat from "./seat";
import SeatBooking from "./seatBooking";

export default class Calendar extends Component {
    render () {
        return (
            <div>
                <span>calendar</span>
                
                <SeatBooking />
            </div>
        )
    }
}