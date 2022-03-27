import React, { Component } from "react";

class NodeDesc extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          top: this.props.position.y + 10 + "px",
          left: this.props.position.x - this.props.text.length * 4 + "px",
          position: "absolute",
          color: "black",
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export default NodeDesc;

/*<div
          id="rectangle"
          style={{
            width: this.props.text.length * 8 + 30 + "px",
            height: "16px",
            top: this.props.position.y - 40 + "px",
            left: this.props.position.x - 8 + "px",
            position: "absolute",
            color: "black",
            backgroundColor: "black",
          }}
        >
          {this.props.text}
        </div>
        */
