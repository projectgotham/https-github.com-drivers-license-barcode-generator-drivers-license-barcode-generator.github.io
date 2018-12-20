import React from "react";
import PropTypes from "prop-types";
import NameInput from "./name-input";

const LastNameInput = ({ onChange, testid }) => (
  <NameInput label={"Last Name"} testid={testid} onChange={onChange} />
);

LastNameInput.propTypes = {
  onChange: PropTypes.func
};

export default LastNameInput;
