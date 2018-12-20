import React, { Component } from "react";
import TextInput from "./text-input";
import uuidv4 from "uuid/v4";
import PropTypes from "prop-types";

export default class DocumentDiscriminatorInput extends Component {
  static propTypes = {
    onGenerate: PropTypes.func,
    value: PropTypes.string.isRequired,
  };

  _handleGenerateClick = () => {
    const { onGenerate } = this.props;

    if (!onGenerate) {
      return;
    }

    onGenerate(uuidv4());
  };

  render() {
    return (
      <div>
        <a onClick={this._handleGenerateClick}>Generate Random</a>
        <TextInput maxlength={25} {...this.props} />
      </div>
    );
  }
}
