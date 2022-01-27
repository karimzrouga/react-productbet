/* eslint-disable jsx-a11y/anchor-is-valid */
import "./../../../Styles/footer.css"
export default function Footer (){
    return(
      
        <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 item">
                        <h3>Home</h3>
                        <ul>
                            <li><a href="#">Home Page</a></li>
                            <li><a href="#">Log In</a></li>
                            <li><a href="#">SIGN UP NOW</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 item">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Buying</a></li>
                            
                            <li><a href="#">Terms & Conditions Help</a></li>
                          
                        </ul>
                    </div>
                    <div className="col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">ProducetBet</a></li>
                            <li><a href="#">Bet</a></li>
                            <li><a href="#">Conatct</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 item text">
                        <h3>Products Bet.com</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
                    </div>
                    <div className="col item social"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-youtube"></i></a><a href="#"><i className="fa fa-instagram"></i></a><a href="#"><i className="fa fa-google"></i></a></div>
                </div>
                <p className="copyright">Products Bet.com © 2022</p>
            </div>
        </footer>
    </div>
    );
}