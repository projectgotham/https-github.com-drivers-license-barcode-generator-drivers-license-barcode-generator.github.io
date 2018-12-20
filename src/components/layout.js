import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Barcode from "./barcode";

import { StaticQuery, graphql } from "gatsby";

import "./layout.scss";

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  _renderBarcode() {
    if (!this.state.data) {
      return null;
    }

    return <Barcode data={this.state.data} />;
  }

  render() {
    return (
      <>
        <div className="container">
          {this._renderBarcode()}
          {this.props.children}
        </div>
      </>
    );
  }
}
