import React from 'react';
import {Card, Container} from "semantic-ui-react";
import CardHead from "./CardHead";
import HeaderGroup from "./HeaderGroup";
import PaymentPlan from "./PaymentPlan";
import FooterButtons from "./FooterButtons";


const OrderCard = () => {



    let cardStyle ={
        height: 600,
        width: 360,
        position: 'absolute',
        borderRadius: 20,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        backgroundColor: "#FFF",
        filter: "drop-shadow(0px 0px 5px #666",

    }

    let contentStyle = {
        padding: '10px 20px 0px 20px'
    }

    let bgStyle = {
        backgroundImage: `url("../images/pattern-background-desktop.svg")`
    }



    return (
        <div style={{bgStyle}}>
        <Card style={cardStyle}>
           <CardHead/>
           <Container style={contentStyle}>
            <HeaderGroup/>
            <PaymentPlan/>
            <FooterButtons/>
           </Container>
        </Card>
    </div>
    );
};

export default OrderCard;
