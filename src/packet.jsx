import React, { Component } from "react";

class Packet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      interval: null,
      ratio: null,
      total: null,
      deltax: null,
    };
    this.move = this.move.bind();
  }

  move = () => {
    if (!this.props.isPaused) {
      if (this.state.count < this.state.value) {
        this.setState({ count: this.state.count + 1 });
      } else if (this.state.count >= this.state.value) {
        this.props.onDelete(this.props.id);
      }
    }
  };

  componentDidMount() {
    if (this.props.second.x - this.props.first.x !== 0) {
      const ratio =
        ((this.props.second.y - this.props.first.y) * 1.0) /
        (this.props.second.x - this.props.first.x);
      this.setState({
        ratio: ratio,
      });
      this.setState({
        value:
          Math.sign(this.props.second.x - this.props.first.x) *
          (this.props.second.x - this.props.first.x) *
          1.0 *
          Math.sqrt(1 + Math.pow(ratio, 2)),
      });
    } else {
      this.setState({
        value:
          (this.props.second.y - this.props.first.y) *
          Math.sign(this.props.second.y - this.props.first.y),
      });
    }

    let interval = setInterval(this.move, 5);
    this.setState({ interval: interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    let top;
    if (this.props.second.x - this.props.first.x !== 0) {
      top =
        59 +
        this.props.first.y +
        Math.sign(this.props.second.x - this.props.first.x) *
          (this.state.count *
            (this.state.ratio / Math.sqrt(1 + Math.pow(this.state.ratio, 2))));
    } else {
      top =
        59 +
        this.props.first.y +
        ((this.props.second.y - this.props.first.y) * this.state.count) /
          this.state.value;
    }
    const left =
      this.props.first.x +
      Math.sign(this.props.second.x - this.props.first.x) *
        (this.state.count * (1 / Math.sqrt(1 + Math.pow(this.state.ratio, 2))));
    return (
      <button
        id="packet"
        style={{
          width: "20px",
          height: "10px",
          position: "absolute",
          borderRadius: "2px 2px 2px 2px",
          backgroundColor: "#645bc7",
          top: top + "px",
          left: left + "px",
        }}
        onClick={() => this.props.onShow(top, left, this.props.info)}
      />
    );
  }
}
export default Packet;
