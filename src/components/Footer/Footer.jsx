import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="brand">
                <h1 class="brand-title">TIMBU</h1>
                <p>Fashion Hub</p>
                <p>"We are the top fashion store in Nigeria and abroad. Make your order now!"</p>
                <p>Shop 12345, PH Rd, PHALGA, Lagos Nigeria.</p>
                <p>+234 876 543 211</p>
            </div>
            <div class="footer-links">
                <div class="link-group">
                    <h4>About</h4>
                    <ul>
                        <li><a href="/about">Shipping policy</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div class="link-group">
                    <h4>Blogs</h4>
                    <ul>
                        <li><a href="/styling">Styling tips</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/wholesale">Why wholesale?</a></li>
                    </ul>
                </div>
                <div class="link-group">
                    <h4>Shopping policy</h4>
                    <ul>
                        <li><a href="/look">Look certificate</a></li>
                        <li><a href="/orders">Our orders</a></li>
                        <li><a href="/promotions">Promotion</a></li>
                    </ul>
                </div>
                <div class="link-group">
                    <h4>Pickup Orders</h4>
                    <ul>
                        <li><a href="/track">Track Your Order</a></li>
                        <li><a href="/invoice">Invoice</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="social-icons">
                <a href="/facebook">FB</a>
                <a href="/twitter">TW</a>
                <a href="/instagram">IG</a>
            </div>
            <p>© 2024 TIMBU Fashion Hub. All Rights Reserved.</p>
        </div>
    </footer>
  );
};
export default Footer;