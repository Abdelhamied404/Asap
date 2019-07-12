import React, { Component } from 'react';

import "./footer.scss";

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer>
                <div className="content">
                    <div className="container">
                        <div className="col">
                            <div className="title">
                                <p>Why ASAP</p>
                            </div>
                            <div className="body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus labore praesentium amet sit molestiae! Culpa alias eveniet repellendus quod, possimus autem eligendi, hic sunt architecto facilis cumque repudiandae accusantium molestias.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="title">
                                <p>Contanct us</p>
                            </div>
                            <div className="body">
                                <p>
                                    Tel: 02 562-958 <br />
                                    Mobile: 02 562-95 <br />
                                    E-mail: contact@asap.io
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="title">
                                <p>Stay Connected</p>
                            </div>
                            <div className="body">
                                <ul>
                                    <li>
                                        <div className="icon"><i className="fa fa-facebook-square"></i></div>
                                        <p>Facebook</p>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fa fa-twitter-square"></i></div>
                                        <p>Twitter</p>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fa fa-google-plus-square"></i></div>
                                        <p>Google+</p>
                                    </li>
                                    <li>
                                        <div className="icon"><i className="fa fa-pinterest-square"></i></div>
                                        <p>Pinterest</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="credits">
                    <div className="copyright">
                        © 2019 - ASAP made with 🧡 by alpha team
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;