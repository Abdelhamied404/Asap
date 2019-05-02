import React from "react";
import { connect } from "react-redux";

import "./message.scss";

const Message = props => {
  console.log("chat", props);
  let me = props.auth_user.user.id === props.user_id;

  let rec_avatar = null;
  props.recipients.forEach(recipient => {
    if (recipient.user.id === props.user_id && !me) {
      rec_avatar = recipient.user.avatar;
    }
  });

  return (
    <div className={"message" + (me ? " me" : "")}>
      {!me ? (
        <div className="rec-avatar">
          <img src={rec_avatar} alt="" />
        </div>
      ) : null}
      <p>{props.body}</p>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ auth_user: user });

export default connect(
  mapStateToProps,
  null
)(Message);
