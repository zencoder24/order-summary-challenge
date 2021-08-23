import './App.css';
import OrderCard from "./components/OrderCard";
import React from "react";


function App() {





  return (
    <div>
        <OrderCard/>
        <div style={{bottom: '5%', left: '35%', position: 'absolute'}}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" >Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/zencoder24">Rodderick Garland</a>.
        </div>
    </div>
  );

}

export default App;
