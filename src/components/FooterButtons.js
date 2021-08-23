import React from 'react';


const FooterButtons = () => {
    let paymentButtonStyle = {
        cursor: 'pointer',
        width: '100%',
        borderRadius: 10,
        height: 40,
        backgroundColor: 'hsl(245, 75%, 52%)',
        borderColor: 'hsl(245, 75%, 52%)',
        color: 'white',
        boxShadow: '-1px 10px 10px lightgrey',
        fontSize: 16,
        fontWeight: 700,
    }

    let cancelButton = {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 700,
        color: 'rgb(127, 131, 160)'
    }


    function MouseOverPayment(event) {
        event.target.style.background = 'hsl(245, 82%,68%)';
    }
    function MouseOutPayment(event) {
        event.target.style.background = "hsl(245, 75%, 52%)";
    }

    function MouseOverCancel(event) {
        event.target.style.color = 'black';
    }
    function MouseOutCancel(event){
        event.target.style.color ="rgb(127, 131, 160)";
    }





    return (
        <div style={{marginTop: 35}}>
            <button onMouseOver={MouseOverPayment} onMouseOut={MouseOutPayment} style={paymentButtonStyle}>Proceed to Payment</button>
            <p onMouseOver={MouseOverCancel} onMouseOut={MouseOutCancel} style={cancelButton}>Cancel Order</p>
        </div>
    );
};

export default FooterButtons;
