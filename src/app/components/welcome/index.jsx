import React from 'react';

import "./welcome.scss";

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="col features">
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-1.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Advanced Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-2.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Respite Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-3.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Daily Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-1.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Neuorology Care</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col about">
                <div className="about-right-side pt-25 mb-30">
                    <div className="about-title mb-20">
                        <h5 className="title">About Us</h5>
                        <h1>Short Story About MediDove Clinic.</h1>
                    </div>
                    <div className="about-text">
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>                            </div>
                    <div className="about-text-list">
                        <ul>
                            <li><i className="fa fa-check"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</span></li>
                            <li><i className="fa fa-check"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</span></li>
                            <li><i className="fa fa-check"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;