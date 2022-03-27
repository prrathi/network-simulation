import React from "react";
import { Component } from "react";

class Play extends Component {
  state = { setShow: true };
  render() {
    return (
      /*
      <React.Fragment>
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Pause" checked />
          Pause
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Step" />
          Step
        </label>
        <label class="radio-inline">
          <input type="radio" name="optradio" value="Play" />
          Play
        </label>
      </React.Fragment>
      */

      <div>
        <button
          onClick={() => this.props.onChange("Stop")}
          className="btn btn-danger btn-lg m-2"
        >
          Stop
        </button>
        <button
          onClick={() => this.props.onChange("Step")}
          className="btn btn-warning btn-lg m-2"
        >
          Step
        </button>
        <button
          onClick={() => this.props.onChange("Play")}
          className="btn btn-success btn-lg m-2"
        >
          Play/Pause
        </button>
        <button
          onClick={() => this.props.onRemove()}
          className="btn btn-dark btn-lg m-2 button"
        >
          Remove
        </button>
        <button
          onClick={() => this.props.onAddEdge()}
          className="btn btn-light btn-lg m-2 button"
        >
          Add Edge
        </button>
        <button
          onClick={() => this.props.onAddNode()}
          className="btn btn-light btn-lg m-2 button"
        >
          Add Node
        </button>
      </div>
    );
  }
}

export default Play;
