import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class ColorPicker extends Component {

  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      selectedColor: props.initialSelectedColor
    }
  }

  changeColor = function(e) {
    console.log(this)
    console.log(e);
    this.setState({
      selectedColor: e.target.dataset.color
    }, console.log(this.state))
  }

  render() {
    let selectedColor = this.state.selectedColor;
    console.log(selectedColor)
    return (
      <div>
        <div className="layout-row justify-content-center">
          <div className="card mt-75">
            <div className="canvas" data-testid="selectedColor" style={{background: selectedColor}}>
              <p className="text-center mx-auto px-5">{selectedColor}</p>
            </div>
            <div className="card-actions">
              <div className="layout-row justify-content-center align-items-center" data-testid="colorPickerOptions">
                {this.props.colorPickerOptions.map((color, index) => {
                  return (
                    <div
                      className={
                        classNames({
                          'color-box': true,
                          'mx-8': true,
                          'my-15': true,
                          'selected': selectedColor === color
                        })
                      }
                      data-color={color}
                      onClick={this.changeColor}
                      style={{background: color}}
                      key={color}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
