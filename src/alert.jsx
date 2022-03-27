import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class DismissAlert extends Component {
  render() {
    if (this.props.show) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.props.onAlert()}
          dismissible
        >
          {this.props.message}
        </Alert>
      );
    }
    return null;
  }
}

export default DismissAlert;
