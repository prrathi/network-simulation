import React, { Component } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Packets from "./packets";
import NodeDesc from "./nodedesc";
//import { receivePacket, sendPacket, timer } from "./animate";

var firstId;
var secondId = 0;

class Cytoscape extends Component {
  /*watch() {
    // if (this.props.removeNode) {
    this.state.cy.on("tap", "node", function (evt) {
      var node = evt.target;
      console.log(node.id());
      //element.nodes = element.nodes.filter((each) => each !== node);
    });
    // }
  }*/
  constructor(props) {
    super(props);
    this.state = { hoverNode: null };
    this.noteNode = this.noteNode.bind(this);
    this.changeNode = this.changeNode.bind(this);
  }

  componentDidMount() {
    this.noteNode();
  }

  changeNode = (event) => {
    if (event.target === this.state.hoverNode) {
      this.setState({ hoverNode: null });
    } else {
      this.setState({ hoverNode: event.target });
    }
  };

  noteNode = () => {
    //listener for user tapping node
    this.cy.on("tap", "node", function (evt) {
      firstId = secondId;
      secondId = evt.target.id();
    });
    this.cy.on("mouseover", "node", this.changeNode);
    this.cy.on("mouseout", "node", this.changeNode);
  };

  componentDidUpdate() {
    if (this.props.play === "Stop") {
      if (this.props.addNode) {
        this.props.onAddNode();
      } //receives signal to add node from play, then sends back to app to update
      if (this.props.remove) {
        this.props.onRemove(this.cy.$(":selected").id());
      } //receives signal to remove from play, then sends element currently selected to remove
      if (this.props.addEdge) {
        const prevNode = firstId;
        const thisNode = secondId;
        this.cy.$(":selected").unselect();
        if (prevNode !== 0 && thisNode !== 0) {
          this.props.onAddEdge(thisNode, prevNode);
        } else {
          this.props.onAddEdge();
        }
        secondId = 0;
      }
    }

    if (this.props.play === "Play") {
      if (this.props.addNode) {
        this.props.onAddNode();
      }
      if (this.props.remove) {
        this.props.onRemove();
      }
      if (this.props.addEdge) {
        this.props.onAddEdge();
      }
    }
    //receives signal to add edge from play, then sends previous two elements selected to create node
    //after being called, gets reset so must select two more after button pressed before adding next edge
  }

  render() {
    return (
      <React.Fragment>
        <CytoscapeComponent
          elements={this.props.element}
          style={{ height: "800px", width: "1200px" }}
          stylesheet={[
            {
              selector: "node",
              style: {
                width: 60,
                height: 60,
                label: "data(id)",
                "text-valign": "center",
                "text-halign": "center",
                "font-size": 24,
              },
            },
            {
              selector: "edge",
              style: {
                width: 5,
              },
            },
          ]}
          // layout={layoutOg}
          minZoom={0.2}
          maxZoom={5}
          cy={(cy) => {
            this.cy = cy;
          }}
        ></CytoscapeComponent>
        {this.state.hoverNode ? (
          <NodeDesc
            text={this.state.hoverNode._private.data.label}
            position={this.state.hoverNode._private.position}
          />
        ) : null}
        <Packets
          //  style={{top: "64px"}}
          first={{ x: 500, y: 300 }}
          second={{ x: 700, y: 500 }}
          info={[
            "Protocol",
            "with a lot of text",
            "t1",
            "h2",
            "t2",
            "h3",
            "t3",
            "h4",
            "t4",
          ]}
          play={this.props.play}
          playSet={this.props.playSet}
        />
      </React.Fragment>
    );
  }
}

export default Cytoscape;
