import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmoothScroll from 'smooth-scroll';
import 'particles.js/particles';
// images
import githubImg from '../../img/menu/github.svg';
import instagramImg from '../../img/menu/instagram.svg';
import twitterImg from '../../img/menu/twitter.svg';
import linkedinImg from '../../img/menu/linkedin.svg';
// css
import './hero.css';

const particlesJS = window.particlesJS;

const Hero = () => {
    const { t } = useTranslation('global');

    const handleScroll = () => {
        const scroll = new SmoothScroll(),
            elmt = document.getElementById('about');
        scroll.animateScroll(elmt);
    }

    useEffect(() => {
        const jsonPath = window.innerWidth <= 800 ? './particlesjs-mobile-config.json' : './particlesjs-config.json';
        particlesJS.load('hero-container', jsonPath);
    }, []);

    return (
        <div id="hero-container">
            <div className="hero-text">
                <h1 className="hero-title">Evan Adams</h1>
                <div className="hero-description">{t('hero.description')}</div>
                <div className="social-container">
                    <div className="social-item">
                        <a href="https://github.com/evanblaine" target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="evan adams github" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.instagram.com/evan_blaine" target="_blank" rel="noopener noreferrer">
                            <img src={instagramImg} alt="evan adams instagram" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://twitter.com/evan_blaine" target="_blank" rel="noopener noreferrer">
                            <img src={twitterImg} alt="evan adams twitter" />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href="https://www.linkedin.com/in/evan-adams-b33859182" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinImg} alt="evan adams linkedin" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-button-container">
                <button onClick={handleScroll} className="learn-more-button">{t('hero.learn-more')}</button>
            </div>
        </div>
    );
}

export default Hero;