import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer  p-10 bg-info-content text-neutral-content">
                <div className='text-start'>
                    <span className="title">Job Hunter</span>
                    <p>There are many variations of passages<br />of Lorem Ipsum , but the majority have<br />suffered alteration in some form.</p>

                    <div >
                        <img src="/public/Icons/Group 9969.png" alt="" />
                    </div>
                </div>
                <div className=' text-start'>
                    <span className="title ">Company</span>
                    <ul>
                        <li>About us</li>
                        <li>Works</li>
                        <li>Latest news</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='text-start'>
                    <span className="title ">Product</span>

                    <ul>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className='text-start'>
                    <span className="title">Support</span>
                    <ul>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div class='text-start'>
                    <span className="title">Contact</span>
                    <ul>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                        
                    </ul>
                </div>
            </footer>
            <footer className="footer   p-4 bg-neutral text-neutral-content">
                <div >
                    <p>@2023 CareerHub. All Rights Reserved</p>
                </div>
                <div className='md:place-self-center md:justify-self-end'>
                    <p>Powered By Job Hunter</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;