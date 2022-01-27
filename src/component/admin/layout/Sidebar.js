import '../../../Styles/adminbody.css';
import {Link } from "react-router-dom";

export default function Sidebar( )
{
    return (
       
   
      
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav nav-pills nav-stacked" id="menu">

      <li className="active">
        <Link to="/admin"><span  ><i className="fa fa-user fa-stack-1x "></i></span> Clients</Link >
        
      </li>
      <li>
        <Link to="/Acategorie"><span  ><i className="fa fa-list fa-stack-1x "></i></span> Categories</Link >
       
      </li>
      <li>
        <Link to="/Aarticles"><span  ><i className="fa fa-product-hunt fa-stack-1x "></i></span>Artilces</Link >
      </li>
      <li>
        <Link to="/Aevent"> <span  ><i className="fa fa-calendar fa-stack-1x "></i></span>Events</Link >
      </li>
      <li>
        <Link to="/Abets"><span  ><i className="fa fa-gavel fa-stack-1x "></i></span>Bets</Link >
      </li>
      <li>
        <Link to="/Acontact"><span  ><i class="fa fa-inbox fa-stack-1x "></i></span>Contact</Link >
      </li>
     
    </ul>
    
  </div>
 
      
  




      
    );
  
 
}