import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.png";

function HeaderView(props) {
  return (
    <div>
      <img src={logo} style={{ display: "inline", marginBottom: "10px" }} />
      <h3 style={{ fontWeight: "bolder", display: "inline" }}>Eden</h3>
    </div>
  );
}

HeaderView.propTypes = {};

export default HeaderView;
