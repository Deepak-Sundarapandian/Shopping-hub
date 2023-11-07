import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer classNameName = "footer py-5 bg-dark">
        <div classNameName = "container">
            <div classNameName = "footer-content text-white grid">
                <div classNameName = "footer-item text-center">
                    <h6 classNameName = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><a href = "/aboutus" classNameName = "fs-15">About Us</a></li>
                        <li><a href = "/contact" classNameName = "fs-15">Contact Us</a></li>
                        <li><a href = "/blog" classNameName = "fs-15">Blog</a></li>
                        <li><a href = "faq" classNameName = "fs-15">FAQ's</a></li>
                    </ul>
                </div>

                <div classNameName = "footer-item text-center">
                    <h6 classNameName='fs-17 fw-6'>Policies</h6>
                    <ul>
                        <li><a href = "/terms" classNameName = "fs-15">Terms & Conditions</a></li>
                        <li><a href = "/cookies" classNameName = "fs-15">Cookies Policy</a></li>
                        <li><a href = "/policy" classNameName = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                <div classNameName = "footer-item text-center">
                    <h6 classNameName='fs-17 fw-6'>About Shopping Hub</h6>
                    <ul>
                        <li><a href = "/terms" classNameName = "fs-15">Company Info</a></li>
                        <li><a href = "/cookies" classNameName = "fs-15">Branches</a></li>
                        <li><a href = "/policy" classNameName = "fs-15">Store</a></li>
                    </ul>
                </div>

                <div classNameName = "footer-item text-center">
                    <h6 classNameName='fs-17 fw-6'>Contact</h6>
                    <ul>
                        <li>
                            <span><i classNameName = "fas fa-phone"></i></span>
                            <span classNameName = "fs-15">+678 004 5754</span>
                        </li>
                        <li>
                            <span><i classNameName = "fas fa-envelope"></i></span>
                            <span classNameName = "fs-15">info@shophub.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer