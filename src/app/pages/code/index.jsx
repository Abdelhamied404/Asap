import React, { Component } from 'react';
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import Nav from '../../components/nav';
import API from '../../../api';
import * as cookie from "../../../actions/utils/cookie";

class Code extends Component {
    state = {
        code: "loading"
    }
    componentDidMount() {
        this.props.auth(null);
        let id = this.props.match.params.id;
        const token = cookie.get("auth");
        const conf = {
            headers: {
                Authorization: token
            }
        };

        API.get("appointment/code/get?id=" + id, conf)
            .then((res) => {
                this.setState({ code: res.data });
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="page">
                <div className="code">
                    <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
                    <div className="container"><p>Your Code is</p>
                        <code>{this.state.code}</code>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ user, appointment }) => ({ ...user, appointment });
const mapDispatchToProps = dispatch => {
    return {
        auth: (next) => dispatch(auth(next))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Code);
