import React from 'react';
import { connect } from "react-redux";

import "./appointment.scss";

const Appointment = (props) => {
    let { checked } = props;
    console.log("appointment", props);
    let time = props.time.split(" ")[1].split(":");
    let stime = time[0] + ":" + time[1];

    let type = "box";
    if (props.reservation && props.user.id && props.reservation.user.id === props.user.id)
        type += " selected";
    else if (checked === 1)
        type += " booked";



    return (
        <div className="appointment">
            <div id={props.id} onClick={select} className={type}>
                <p>{stime}</p>
                <span />
            </div>
        </div>
    );
}

const select = (e) => {
    let ele = e.target.parentNode;

    if (ele.classList.contains("booked")) {
        alert("already booked");
    } else if (ele.classList.contains("selected")) {
        ele.className = "box";
    } else {
        // reset all
        let appoins = document.querySelectorAll(".appointment");
        appoins.forEach((ele) => {
            let selected = ele.firstChild.classList.contains("selected");
            if (selected) {
                ele.firstChild.className = "box";
            }
        });
        // select
        ele.classList.add("selected");
    }

}

const mapStateToProps = ({ user }) => ({ ...user });

export default connect(
    mapStateToProps,
    null
)(Appointment);