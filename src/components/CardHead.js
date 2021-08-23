import React from 'react';
import heroPhoto from '../images/illustration-hero.svg'


const CardHead = () => {

    let cardHeadStyle = {
        height: 175,
        backgroundImage: `url(${heroPhoto})`,
        backgroundSize: 'cover '
    }


    return (
        <div style={cardHeadStyle}>

        </div>

    );
};

export default CardHead;
