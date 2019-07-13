import React, { Component } from 'react';
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import Nav from '../../components/nav';
import Input from "../../components/field";
import { Button } from "@material-ui/core";
import * as cookie from "../../../actions/utils/cookie";
import API from '../../../api';

import "./check.scss";
import Footer from '../../components/footer';

class Check extends Component {
    state = {
        user: null
    }
    componentDidMount() {
        this.props.auth(null);
    }
    render() {
        return (
            <div className="page">
                <div className="check">
                    <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
                    <div className="content">
                        <div className="text-field">
                            <Input name="code" label="code" type="code" />
                            <span id="error"></span>
                        </div>
                        <div className="input check-button">
                            <Button className="rounded main" onClick={this.checkCode.bind(this)}>
                                Check
                            </Button>
                        </div>
                    </div>
                    <div className="data">
                        {this.state.user ?
                            <div className="user">
                                <ul>
                                    <li>name : {this.state.user.name ? this.state.user.name : "undefined"}</li>
                                    <li>address : {this.state.user.address ? this.state.user.address : "undefined"}</li>
                                    <li>state : {this.state.user.state ? this.state.user.state : "undefined"}</li>
                                    <li>country : {this.state.user.country ? this.state.user.country : "undefined"}</li>
                                    <li>gender : {this.state.user.gender ? this.state.user.gender : "undefined"}</li>
                                    <li>phone : {this.state.user.phone ? this.state.user.phone : "undefined"}</li>
                                </ul>
                            </div>
                            :
                            null}
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
    checkCode() {
        let code = document.querySelector(".text-field input").value;

        const token = cookie.get("auth");
        const conf = {
            headers: {
                Authorization: token
            }
        };

        API.get("appointment/code/check?code=" + code, conf)
            .then((res) => {
                if (res.data.status === "error") {
                    let span = document.querySelector(".text-field span#error");
                    span.innerText = res.data.message;

                } else {
                    this.setState({ user: res.data.data.user });
                }
            }).catch((err) => {
                console.log(err);
            });
    }
}

const mapStateToProps = ({ user }) => ({ ...user });
const mapDispatchToProps = dispatch => {
    return {
        auth: (next) => dispatch(auth(next))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Check);
