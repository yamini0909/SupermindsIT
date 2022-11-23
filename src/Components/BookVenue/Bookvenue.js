import React from "react";
import candles from "../Images/candles.png";
import people from "../Images/people.png";
import main from "../Images/main.png";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import five from "../Images/5.png";

import "./Bookvenue.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Bookvenue = () => {

  return (
    <>
    <Header></Header>
        <div className="second-page">
      <div className="sectionA">
        <div className="image1">
          <div className="main-heading1">
            At 18 Candelriggs we make it happen
          </div>
          <div className="image-cnt1">
            <img src={people} alt="" />
          </div>
        </div>
        <div className="image2">
          <div className="main-heading2">Events are the name of the game</div>
          <div className="image-cnt2">
            <img src={candles} alt="" />
          </div>
        </div>
      </div>
      <div className="sectionB">
        <div className="book-venue-heading">Book Venue</div>
        <div className="image3">
          <img src={main} alt="" height="600px" width="100%" />
        </div>
      </div>
      <div className="sectionC">
        <div className="bg-purple">
          <div className="front">
            <div className="image-grid">
              <div className="onerow">
                <img src={one} alt="" width="60%" height="60%"/>
                <img src={two} alt="" width="60%" height="60%" />
              </div>
              <div className="tworow">
                <img src={three} alt=""  width="60%" height="30%"/>
                <img src={four} alt=""  width="60%" height="30%"/>
              </div>

              <img src={five} alt="" width="120%" height="30%"/>
            </div>
            <div className="para-text">
              <div className="para1">
                A one-stop cabaret lounge in the heart of Merchant City, 18
                Candleriggs (formerly known as Wild Cabaret) knows no bounds
                when it comes to unique dabbles, daring nights and dashing
                shows.
              </div>
              <div className="para2">
                Echoing its eccentric entertainment, the decor is markedly Art
                Deco. Gilded in gold, with a bar boasting its name up in
                Hollywood-style lights, these two spaces epitomize showbiz and
                glistening sass. Sashay down to a table of baroque seats and let
                the show commence.
              </div>
              <div className="para3">
                Events are the name of the game at 18 Candelriggs, where live
                music and cabaret reign supreme. From burlesque shows and circus
                troupes to comedy nights and luxe shows, it's at the top of its
                game when it comes to providing guests with a wholly unique
                drinking and dining experience in the city. Top hats? Sparkles?
                And feather boas? These all come as standard.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>

  );
};

export default Bookvenue;
