import React from "react";
import { connect } from "react-redux";
import Appointment from "../../components/appointment";

import "./appointments.scss";

const Appointments = props => {
    const { loaded, appointments } = props.appointment;
    return (
        <div className="appointments">
            {loaded === 1
                ? list_Appointments(appointments)
                : "loading"}
        </div>
    );
};

const row = (list, i) => {
    let date = list[0].time.split(" ")[0].split("-");
    let sDate = date[2] + "-" + date[1];
    return (
        <div className="row" key={i}>
            <div className="date">
                <p>{sDate}</p>
            </div>
            {list.map((appoint) => <Appointment key={appoint.id} {...appoint} />)}
        </div>
    );
}

const list_Appointments = (list) => {
    let table = [];
    if (list && Array.isArray(list)) {
        console.log(list);
        list.forEach((ele, i) => {
            table.push(row(ele, i));
        });
    }
    return table;
};

const mapStateToProps = ({ appointment }) => ({ appointment });

export default connect(
    mapStateToProps,
    null
)(Appointments);
