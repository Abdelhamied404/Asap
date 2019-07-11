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
                            <h3>Reservation</h3>
                            <p>find a doctor and reserve your appointment fast, clean and easy.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-2.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Community</h3>
                            <p>get some advices from profissional doctors or a paient who might experniced this illness.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-3.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Doctor Recommendation</h3>
                            <p>recommend doctors by higher rates and accourding to your illness.</p>
                        </div>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <img src="http://bdevs.net/theme/medidove/wp-content/uploads/2019/05/s-fea-icon-1.png" alt="Fact #1" />
                        </div>

                        <div className="feature-content">
                            <h3>Chat</h3>
                            <p>talk directly to doctors and ask them for advices or consultant.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col about">
                <div className="about-right-side pt-25 mb-30">
                    <div className="about-title mb-20">
                        <h5 className="title">About Us</h5>
                        <h1>Short Story About Asap.</h1>
                    </div>
                    <div className="about-text">
                        <p>Main goal about this project is to enable people living on the land of egypt and visitors to find the doctors they need easliy in quick way with just a click and easily communicate with them</p>
                    </div>
                    <div className="about-text-list">
                        <ul>
                            <li><i className="fa fa-check"></i><span>facilitate the searching process for a doctor.</span></li>
                            <li><i className="fa fa-check"></i><span>community to get advice from paient who experniced this illness.</span></li>
                            <li><i className="fa fa-check"></i><span>provide fast and accurate response to users.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;