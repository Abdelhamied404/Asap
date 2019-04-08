import React from "react";

import "./loading.scss";

const Loading = props => {
  return (
    <div className="loading">
      <img src={require("../../../assets/images/logo.svg")} alt="" />
      <p>loading</p>
    </div>
  );
};

export default Loading;
