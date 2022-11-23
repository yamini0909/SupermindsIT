import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section1">
      <div className="outer-border">
        <div className="inner-border">
          <div className="text-section1">
            The perfect night out in Glasgow !
          </div>
          <div className="text-section1 mb">18 Candleriggs</div>
          <div className="text-section1 mb">ON 14TH & 15TH FEB</div>
          <div>
            <button className="booktickets-btn">Book Tickets</button>
          </div>
          <div className="text-section">
            3 COURSE MEAL & SHOW INCLUDED $ 17 per person
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
