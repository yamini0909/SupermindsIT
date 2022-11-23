
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import BookVenue from "./Components/BookVenue/Bookvenue";
import Home from "./Components/Home"
// import Secondpage from "./Components/second-page/secondpage";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route path="/bookvenue">
            <BookVenue />
          </Route> */}
          <Route path="/bookvenue" element={<BookVenue/>} />
          <Route path="/" element={<Home/>} />

          {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
