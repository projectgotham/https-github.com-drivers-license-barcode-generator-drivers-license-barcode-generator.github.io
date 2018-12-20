import React, { Component } from "react";
import PropTypes from "prop-types";

export default class DateInput extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string.isRequired
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
          onChange={this._handleChange}
          type="date"
          className="form-control"
        />
      </div>
    );
  }
}
