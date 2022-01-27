import "../../Styles/home.css";
import "../../Styles/cardinfo.css";
import { Link } from "react-router-dom";
import HomeNavbar from "./layout/navbar";
import HCategories from "./pages/HCategorie";
import Footer from "./layout/Footer";
import Banner from "./../others/banner";
import { GetAllArticles } from "../../services/Article_services";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [Articles, setstate] = useState([]);

  let getarticle = () => {
    GetAllArticles().then((response) => {
      setstate(response.data);
    });
  };
  useEffect(() => {
    const id = setInterval(getarticle, 600);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <HomeNavbar />
      <div className="jumbotron jumbotron-fluid  text-white bg-secondary">
        <div className="container text-center custom-heading">
          <h1 className="display-3 courgette">Welcome to the Products Bet</h1>
          <h3 className="lead courgette">
            Experience the thrill of a busy live auction. The environment is
            fun, there's nothing quite like it! 
          </h3>

          <div
            className="btn-group mt-4 "
            role="group"
            aria-label="Callout buttons"
          >
            <Link to="/up">
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg"
                data-toggle="modal"
                data-target="#join"
              >
                Join now!
              </button>
            </Link>
            <Link to="/in">
              <button
                type="button"
                className="btn btn-danger btn-lg"
                data-toggle="modal"
                data-target="#login"
              >
                Log in!
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-blue">
              <div className="inner">
                <h4> World Wide Free Shipping </h4>
              </div>
              <div className="icon">
                <i className="fa fa-plane" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-green">
              <div className="inner">
                <h4> 100% Money Back Guarantee </h4>
              </div>
              <div className="icon">
                <i className="fa fa-money" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-orange">
              <div className="inner">
                <h4> 78269 Clients around the world </h4>
              </div>
              <div className="icon">
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="card-box bg-red">
              <div className="inner">
                <h4> 24/7 Online Support </h4>
              </div>
              <div className="icon">
                <i className="fa fa-question-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<HCategories />}
      <hr/>
      

      {
    <Banner slides={Articles}/>

      }
    
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg order-lg-2">
            <h3 className="mb-4">About Products Bet</h3>
            <img
              className="mb-4 img-fluid rounded  d-sm-block"
              src="/auction.png"
              width={100}
              alt="Store"
            />
            <p>
              We are focused exclusively on the sale of residential bank-owned
              and foreclosure properties. bid, win and close with confidence.
            </p>
            <p>
              Our auction buying process is simple, efficient, and transparent.
              Find Your Properties. Search, track and research your properties.{" "}
            </p>
            <p>
              Start Bidding. Bid at live and online auctions. Win the Auction.
            </p>
          </div>

          <div className="col-lg order-lg-1">
            <h3 className="mb-4">Products Bet History</h3>
            <p>
              Products Bet were taking place even before the release of the
              first web browser for personal computers, NCSA Mosaic. Instead of
              users selling items through the Web they were instead trading
              through text-based newsgroups and email discussion lists.
            </p>
            <p>
              {" "}
              However, the first Web-based commercial activity regarding online
              auctions that made significant sales began in May 1995 with the
              company Onsale. In September that same year eBay also began
              trading. Both of these companies used ascending bid. The Web
              offered new advantages such as the use of automated bids via
              electronic forms, a search engine to be able to quickly find items
              and the ability to allow users to view items by categories.
            </p>
          </div>

          <div className="col-lg order-lg-3">
            <h3 className="mb-4">I WANT TO BUY</h3>
            <ul>
              <li>Keep an eye on the items you like</li>
              <li>Place bids on the items you love</li>
              <li>Track all your bids in one convenient place</li>
              <li>Keep an eye on the items you like</li>
              <li>
                To participate in our online auctions, sign up to become a
                registered Bidder. The registration process provides us with the
                necessary information to assign you a Bidder Number. Your bidder
                number serves as your username to login, manage your Bidder
                Profile, and place Bids. Your bidder number will be yours for
                every online auction on our website. It is important that you
                familiarize yourself with the website and Auction  Terms and
                Conditions prior to bidding
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
