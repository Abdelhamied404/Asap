import React, { Component } from 'react';
import { connect } from "react-redux";
import { auth } from "../../../actions/user";
import Nav from "../../components/nav";
import ProfileCard from '../../containers/profile-card';
import { get } from "../../../actions/profile";

import "./reserve.scss";
import { getAppointments, reserve } from '../../../actions/appointment';
import Appointments from '../../containers/appointments';
import { Button } from "@material-ui/core";

class Reserve extends Component {
    state = {
    };
    componentDidMount() {
        this.props.auth();
        let username = this.props.match.params.name;
        console.log(username);
        this.props.getProfile(username);

        let parts = username.split("-")
        let id = parts[parts.length-1];
        this.props.getAppointments(id);
    }

    render() {
        return (
            <div className="page">
                <div className="reserve">
                    <Nav profile isAuth={this.props.isAuth} user={this.props.user} />
                    <div className="content">
                        {this.props.profile.loaded ? <ProfileCard vertical {...this.props.profile} /> : ""}
                        <div className="table">
                            <Appointments />
                            <Button onClick={this.reserve.bind(this)} className="rounded main">Reserve</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    reserve() {
        let id = document.querySelector(".selected").id;
        this.props.reserve(id);
    }



}
const mapStateToProps = ({ user, profile, appointment }) => ({ ...user, profile, appointment });
const mapDispatchToProps = dispatch => {
    return {
        auth: (next) => dispatch(auth(next)),
        getProfile: username => dispatch(get(username)),
        getAppointments: doctor_id => dispatch(getAppointments(doctor_id)),
        reserve: (id) => dispatch(reserve(id)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reserve);
