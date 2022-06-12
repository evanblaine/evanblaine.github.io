import React from 'react';
import { useTranslation } from 'react-i18next';
// components
import SectionTitle from '../Titles/sectionTitle';
// utils
import { getTimeBetween } from '../../utils/dates';
// images
import DownloadIcon from '../../img/menu/download.svg'
// css
import './about.css';


const About = () => {
    const { t } = useTranslation('global');

    return (
        <div id="about">
            <SectionTitle title={t("about-me.title")} />
            <div className="about-description-container">
                <p className="first-letter">
                    {
                        t("about-me.description-a") + ' '
                        + getTimeBetween('2018/07/01') + ' '
                        + t("about-me.description-b") + ' '
                        + t("about-me.description-c")
                    }
                </p>
                <p>{t("about-me.description-d")}</p>
                <a className="download-cv" href="CV.pdf" download>
                    <div>{t("about-me.cv")}</div>
                    <img src={DownloadIcon} alt="" />
                </a>
            </div>
        </div>
    );
}

export default About;