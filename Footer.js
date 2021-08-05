import React from "react"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../Components/index.css";

const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-content">
       <p>Product</p>
       <p>Order</p>
       <p>Shipping</p>
            <div className="socialMedia">
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <FacebookIcon />
            </div>
      </div>
        <p className="footer-copyrights">&copy;All rights are Reserved !</p>
    </div>
  )
}

export default Footer;