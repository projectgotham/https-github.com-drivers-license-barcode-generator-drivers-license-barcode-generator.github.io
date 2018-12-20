import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    testid: PropTypes.string,
  };

  _handleChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event.target.value);
    }
  };

  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          data-testid={this.props.testid}
          type="text"
          onChange={this._handleChange}
          value={this.props.value}
          className="form-control"
        />
      </div>
    );
  }
}
