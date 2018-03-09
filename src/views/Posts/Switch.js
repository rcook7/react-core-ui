import React, { Component } from 'react';

export class Switch extends Component {
  constructor(props) {
    super(props);

    this.switchValue = this.switchValue.bind(this);
  }

  switchValue(e) {
    this.props.input.onChange(e.target.checked);
  }

  render() {
    const { value } = this.props.input;

    return (
      <label className="switch switch-3d switch-primary">
        <input checked={value?'checked':''} type="checkbox" className="switch-input" onChange={this.switchValue} />
        <span className="switch-label"></span>
        <span className="switch-handle"></span>
      </label>
    )
  }
}