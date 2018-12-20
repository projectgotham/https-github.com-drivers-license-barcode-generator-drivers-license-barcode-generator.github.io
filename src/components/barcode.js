import React, { Component } from "react";
import PDF417 from "../pdf417";
import PropTypes from "prop-types";

export default class Barcode extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this._ref = React.createRef();
  }

  componentDidMount() {
    this._drawBarcode();
  }

  componentDidUpdate() {
    this._drawBarcode();
  }

  _drawBarcode() {
    PDF417.init(this.props.data);
    var barcode = PDF417.getBarcodeArray();
    // block sizes (width and height) in pixels
    var bw = 2;
    var bh = 2;
    // create canvas element based on number of columns and rows in barcode
    var canvas = this._ref.current;
    canvas.width = bw * barcode["num_cols"];
    canvas.height = bh * barcode["num_rows"];
    // this._ref.current.appendChild(canvas)
    var ctx = canvas.getContext("2d");
    // graph barcode elements
    var y = 0;
    // for each row

    for (var r = 0; r < barcode["num_rows"]; ++r) {
      var x = 0;
      // for each column
      for (var c = 0; c < barcode["num_cols"]; ++c) {
        if (barcode["bcode"][r][c] == 1) {
          ctx.fillRect(x, y, bw, bh);
        }
        x += bw;
      }
      y += bh;
    }
    1;
  }

  render() {
    return <canvas style={{ background: "white" }} ref={this._ref} />;
  }
}
