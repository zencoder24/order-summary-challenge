import React from 'react';
import {Card, Header} from "semantic-ui-react";





const HeaderGroup = () => {

    return (
        <div style={{textAlign: 'center'}}>
            <Header as='h1' style={{fontWeight: 900, fontSize: 28}}>Order Summary</Header>
            <Card.Meta  style={{fontSize: 16, lineHeight: 1.5, color:'#7f83a0'}}> You can now listen to millions of songs, audiobooks, and podcasts on any
                        device anywhere you like!</Card.Meta>
        </div>
    );
};

export default HeaderGroup;
