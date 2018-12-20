import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HeightInput extends Component {
  static propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string,
    unitOptions: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      rawValue: 0,
      unit: "in"
    };
  }

  _handleChange = value => {
    // TODO
  };

  _renderUnitOptions() {
    return (
      <select onChange={this._handleUnitChange}>
        {this.props.unitOptions.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    );
  }

  render() {
    return (
      <div>
        <label>Height</label>
        <input onChange={this._handleChange} type="text" />

        {this._renderUnitOptions()}
      </div>
    );
  }
}
