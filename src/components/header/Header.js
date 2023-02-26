import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <section id="header">
            <div className="container header">
                <div className="header-left" data-aos="fade-right">
                    <h1>
                        <span>The world's leading</span>
                        <span>cross-platform secure</span>
                        <span>messaging system</span>
                    </h1>
                    <p className="u-text-small">
                        SocialX is a Lorem ipsum dolor sit amet, consectetur
                        elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt
                        et!
                    </p>
                    <div className="header-cta">
                        <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
                        <Button text={"How It works"} btnClass={"btn-light"} href={"#"} />
                    </div>
                </div>
                <div className="img-resize" data-aos="fade-left">
                    <img src={phoneHeader} alt="phone" />
                </div>
            </div>
            <div className="floating-icon">
                <a href="#features">
                    <BsMouse color="#fff" size={25} className="mouse" />
                </a>
            </div>
        </section>
    );
};

export default Header;
