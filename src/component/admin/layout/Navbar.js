import '../../../Styles/layout.css';
import "font-awesome/css/font-awesome.min.css";
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";
export default function Navbar( )
{  let navigate = useNavigate()
  let clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
 
  };
    return (
       
       < nav className="navbar navbar-black bg-black">
        <div className="container-fluid">
       
        
        <Link to="/"><h1 className='title' style={{ textDecoration: 'underline  #ECE8E8', color: 'white' }}> Product Bet</h1></Link >
            <button  class="btn btn-secondary" onClick={ ()=>{
             clearCacheData ()
             localStorage.setItem("user",null)
             navigate("/")
            }} >
            <i className="fa fa-sign-out"></i>  Logout
            </button>
          
        </div>
      </nav>


      
    );
  
 
}