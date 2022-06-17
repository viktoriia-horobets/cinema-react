// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { img_300, noPicture } from "../defaults/images";
import { Link  } from "react-router-dom";

const Card = (data) => {
    return (
        <div className="card">
            <img
                src={data.poster_path ? `${img_300}/${data.poster_path}` : noPicture}
                alt=""
                className="card__photo"
                // onDragStart={handleDragStart}
            />
            <div className="description">
                <h3 className="cast__name">{data.original_title || data.original_name}</h3>
                <h5 className="date">{data.release_date || data.first_air_date}</h5>
                <Link className="button" to={`/movieInfo/${data.id}`}>See more info</Link>
            </div>
        </div>
    )
}
export default Card;
