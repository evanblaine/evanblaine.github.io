import React from 'react';
// images
import githubImg from '../../img/menu/github-white.png';
import instagramImg from '../../img/menu/instagram-white.png';
import twitterImg from '../../img/menu/twitter-white.png';
import linkedinImg from '../../img/menu/linkedin-white.png';
import myLogo from '../../img/menu/mylogo.svg';

import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                <img id="myLogo-footer" src={myLogo} alt="evan adams logo" />
                <p>&copy; {new Date().getFullYear()} Evan Adams</p>
            </div>
            <div className="footer-social">
                <a href="https://github.com/evanblaine" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="evan adams github" />
                </a>
                <a href="https://www.instagram.com/evan_blaine" target="_blank" rel="noopener noreferrer">
                    <img src={instagramImg} alt="evan adams instagram" />
                </a>
                <a href="https://twitter.com/evan_blaine" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="evan adams twitter" />
                </a>
                <a href="https://www.linkedin.com/in/evan-adams-b33859182" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="evan adams linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Footer;