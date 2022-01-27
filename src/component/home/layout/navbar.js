import {Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Token } from "../../../Constantes/Token";
export default function HomeNavbar (){
  //var user = JSON.parse(localStorage.getItem("user"));

return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
   <a className="navbar-brand order-1 " href="#" target="_blank">Products Bet<i className="fa fa-gavel fa-stack "></i></a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     <div className="navbar-nav">
       { Token=="null" ?<></> :<Link to="/profile">  <a className="nav-item nav-link"  >Profile  <i className="fa fa-user "></i>   </a></Link> }
     <Link to="/">  <a className="nav-item nav-link" >Home <span className="sr-only">(current)</span></a></Link>
       <Link to="/hbets"> <a className="nav-item nav-link" >Bets</a></Link>
       <Link to="/hevent"> <a className="nav-item nav-link" href="#" >Events</a></Link>
       <Link to="/contact"><a className="nav-item nav-link" href="#">Contact</a></Link>
       
     </div>
     </div>
   </div>
 </nav>
);
}