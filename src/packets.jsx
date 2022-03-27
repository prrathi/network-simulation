import React, { Component } from "react";
import "./App.css";
import Packet from "./packet";
import Rect from "./rect";

class Packets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: 0,
      arr: [1],
      //    isPaused: false,
      confirm: false,
      showRect: false,
      top: null,
      left: null,
      info: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleAdd() {
    if (!this.state.isPaused) {
      this.setState({ arr: this.state.arr.concat(this.state.newItem) });
      this.setState({ newItem: this.state.newItem + 1 });
    }
  }

  handleDelete(id) {
    var copy = [...this.state.arr];
    var index = copy.indexOf(id);
    if (index !== -1) {
      copy.splice(index, 1);
      this.setState({ arr: copy });
    }
  }

  handleShow(top, left, info) {
    if (!this.props.playSet) {
      this.setState({ showRect: !this.state.showRect });
      this.setState({ top: top, left: left, info: info });
    }
  }

  componentDidUpdate() {
    if (this.props.playSet && this.state.showRect) {
      this.setState({ showRect: false });
    }
  }

  render() {
    return (
      /*
      <div>
        <button
          onClick={() => this.handleAdd()}
          className="btn btn-success btn-lg m-2"
        >
          Add
        </button>
        <button
          onClick={() => this.handlePause()}
          className="btn btn-danger btn-lg m-2"
        >
          Play/Pause
        </button>
        {this.state.arr.map((num) => (
          <Packet
            key={num}
            id={num}
            isPaused={this.state.isPaused}
            onDelete={this.handleDelete}
            onShow={this.handleShow}
            first={this.props.first}
            second={this.props.second}
            info={this.props.info}
          ></Packet>
        ))}
        <Rect
          showRect={this.state.showRect}
          isPaused={this.state.isPaused}
          top={this.state.top + 5}
          left={this.state.left + 30}
          info={this.state.info}
        ></Rect>
      </div>
      */
      <div>
        {this.props.play === "Play"
          ? this.state.arr.map((num) => (
              <Packet
                key={num}
                id={num}
                isPaused={!this.props.playSet}
                onDelete={this.handleDelete}
                onShow={this.handleShow}
                first={this.props.first}
                second={this.props.second}
                info={this.props.info}
              ></Packet>
            ))
          : null}

        <Rect
          showRect={this.state.showRect}
          isPaused={this.props.playSet ? false : true}
          top={this.state.top + 5}
          left={this.state.left + 30}
          info={this.state.info}
        />
      </div>
    );
  }
}

export default Packets;
