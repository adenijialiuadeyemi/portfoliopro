import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://web.facebook.com/aliuadeyemi.adeniji.1/">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            <a href="https://mail.google.com/mail/u/0/#inbox">
                                <i class="fa fa-google-plus-square"></i>
                            </a>
                            <a href="https://github.com/adenijialiuadeyemi">
                                <i class="fa fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/aliu-adeniji-927631202/">
                                <i class="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://twitter.com/AdenijiAliuAde1">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <p className="primary-text">{" "}Hello I'm <span className="highlighted-text">Adeniji Aliu Adeyemi</span></p>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    steps={[
                                        "Enthusiastic Developer 😎", 1000,
                                        "Full Stack Developer 💻", 1000,
                                        "MERN Stack Developer 📱", 1000,
                                        "Cross Platform Developer 🔴", 1000,
                                        "React/React Native 🌐", 1000,
                                        "Python Developer 💻", 1000,
                                        "Django Expert 🔴", 1000,
                                    ]}
                                    wrapper='p'
                                    loop={Infinity}
                                />
                            </h1>
                            <span className="profile-role-tagline">Knack of building applications with frontend and backend operations</span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        > Hire Me </button>
                        <a href="ALIU_CV.pdf" download="Adeniji Aliu.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                    </div>
                </div>
            </div>
        </div>
    )
}