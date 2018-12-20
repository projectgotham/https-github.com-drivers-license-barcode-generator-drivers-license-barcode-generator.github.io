import React, { Component } from "react";
import PropTypes from "prop-types";

export default class EyeColorInput extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired
      })
    ).isRequired,
    selected: PropTypes.string,
    onChange: PropTypes.func
  };

  _handleClick = label => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(label);
    }
  };

  _renderEyeColorOptions() {
    return this.props.options.map((option, index) => {
      let className = `eye-color-${option.slug}`;

      if (option.label === this.props.selected) {
        className += " selected";
      }

      return (
        <div
          onClick={this._handleClick.bind(null, option.label)}
          className={className}
          key={index}
        >
          {option.label}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="form-group">
        <label>Eye Color</label>
        {this._renderEyeColorOptions()}
      </div>
    );
  }
}
