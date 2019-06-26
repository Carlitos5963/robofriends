import React from "react";
import 'tachyons';

const Card = ({ id, name, email }) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5 bw2'>
            <img className='' alt="My Monster" src={`https://robohash.org/${id}`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;