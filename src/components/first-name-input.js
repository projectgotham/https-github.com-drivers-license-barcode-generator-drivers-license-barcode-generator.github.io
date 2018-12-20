import React from "react";
import PropTypes from "prop-types";
import NameInput from "./name-input";

const FirstNameInput = ({ onChange, testid }) => (
  <NameInput label={"First Name"} testid={testid} onChange={onChange} />
);

FirstNameInput.propTypes = {
  onChange: PropTypes.func
};

export default FirstNameInput;
