import React from "react";

export default function Seat(props) {
    return (
        <div className={`seat seat__${props.seat.status}`} onClick={(e) => props.onClick(props.seat.id) }>
           {props.seat.status}
        </div>
    )
}