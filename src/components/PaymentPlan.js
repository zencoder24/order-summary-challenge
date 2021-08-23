import React from 'react';
import {Header} from "semantic-ui-react";
import musicIcon from "../images/icon-music.svg"


const PaymentPlan = () => {

    let planStyle = {
        backgroundColor: "#f8f9fe",
        marginTop: '10%',
        padding: '12px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        maxHeight: '50px',
        justifyContent: 'space-between'



    }

    function MouseOverChange(event) {
        event.target.style.color = 'hsl(245, 82%,68%)';
    }
    function MouseOutChange(event) {
        event.target.style.color = "hsl(245, 75%, 52%)";
    }


    return (
        <div style={planStyle}>
            <img src={musicIcon} alt="music icon"/>
            <div style={{flex:2, marginLeft: 30, lineHeight: 0.3}}  >
                <Header as="h4" >Annual Plan</Header>
                <p>$59.99/year</p>
            </div>
            <a onMouseOver={MouseOverChange} onMouseOut={MouseOutChange} style={{flex: 1, fontWeight: 700}} href="#" >Change</a>

        </div>
    );
};

export default PaymentPlan;
