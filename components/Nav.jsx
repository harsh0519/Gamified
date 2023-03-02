import React from "react";
import "../css/nav.css";
import Headerlogo from "../images/header-img.png";
import logo from "../images/logo.png";
import social from "../images/nav-icon.png";
function Nav() {
  return (
    <>
      <div className="nav">
        <div class="container">
          <div class="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />{" "}
              <span class="logo-txt">GAMIFIED</span>
            </div>
            <div className="search">
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-orange-300 rounded-md py-2 pl-9 pr-3 shadow-sm outline-orange-400 focus:outline-none focus:border-amber-700 focus:ring-orange-600 focus:ring-1 sm:text-sm"
                placeholder="SEARCH EXISTING PLAYER"
                type="text"
                name="search"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <h1>
                CONNECT AND <br />
                CONQUER
              </h1>
              <p>
                Search for People to play with , match with your perfect
                teammates,meet new friends and never play solo again
              </p>
              <button class="cta-btn">Sign In</button> <br />
              <small>
                Already a member?
                <a href="/" class="small-txt">
                  LogIn here
                </a>
              </small>
              <div className="supported-games">
                <p>Supported Games</p>

                <img src={social} alt="1" />
              </div>
            </div>

            <div class="col-2">
              <img src={Headerlogo} alt="header-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
