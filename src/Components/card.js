// import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import { img_300, noPicture } from "../defaults/images";


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
                <h4 className="cast__name">{data.original_title || data.original_name}</h4>
                <h5 className="date">{data.release_date || data.first_air_date}</h5>
                <button className="button">Buy a ticket</button>
            </div>
        </div>
    )
}
export default Card;
// export default class Card extends Component {
//     render () {
//         return (
        
//             <div className="card">
//                 <img className='card__photo' src="https://fantlab.ru/blogfiles/b74269/img/1?r=1631814565" alt="" srcset="" />
//                 <div className='description'>
//                     <h1>Dune</h1>
//                     <Button />
//                     <div className='text'>
                        
//                         <span >Today, 11 Feb</span>
//                     </div>
                  
                

//                 </div> 
//             </div>
            
//         )
//     }
// }