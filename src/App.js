import React, { Component } from "react";
import "./App.css";
import Play from "./play";
import Cytoscape from "./graph";
import DismissAlert from "./alert";

let rand; //used to make ids of elements (nodes+edges)
let foo = [1, 2, 501]; //keep track of ids of elements
let node = 3;
let edge = 502;
let count = -1; //used to search through elements when removing
let pairs = [[1, 2]]; //keep track of source/target of edges

class App extends Component {
  state = {
    show: false,
    message: "",
    play: "Stop",
    playSet: true,
    addNode: false,
    addEdge: false,
    remove: false,
    thing: [
      {
        data: { id: 1, label: "Customizable label #1" },
        position: { x: 200, y: 200 },
      },
      {
        data: { id: 2, label: "Customizable label #2" },
        position: { x: 600, y: 200 },
      },
      { data: { id: 501, source: 1, target: 2 } },
      //this is the format fed into cytoscape
    ],
  };

  arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      // eslint-disable-next-line
      a.every((val, index) => val == b[index])
    );
  }

  handleAlert = () => {
    this.setState({ show: false });
  };

  handleChange = (newPlay) => {
    if (this.state.play !== newPlay) {
    }
    this.setState({ play: newPlay });
    if (this.state.play === newPlay && this.state.play === "Play") {
      this.setState({ playSet: !this.state.playSet });
    } else {
      this.setState({ playSet: true });
    }
    //changing stop/step/play mode
  };

  handleAddNode = () => {
    if (this.state.play === "Stop") {
      if (this.state.addNode) {
        //after graph receives signal
        /* rand = Math.floor(1 + Math.random() * 500);
        while (foo.includes(rand)) {
          rand = Math.floor(1 + Math.random() * 500);
        } //creates node id that doesn't already exist*/
        rand = node;
        foo.push(rand);
        console.log(rand);
        var joined = this.state.thing.concat({
          data: { id: rand, label: "Customizable label #" + rand },
          renderedPosition: { x: 400, y: 400 },
        });
        this.setState({ thing: joined }); //adds node to current elements
        node++;
        this.setState({ addNode: false });
      } else {
        this.setState({ addNode: true }); //signal from play to graph
      }
    } else {
      this.setState({ show: true });
      this.setState({
        message: "Must be stopped to add a node!",
      });
      this.setState({ addNode: false });
    }
  };

  handleAddEdge = (nextNode, prevNode) => {
    if (this.state.play === "Stop") {
      if (this.state.addEdge) {
        console.log([nextNode, prevNode]);
        //after graph receives signal
        var npresent = false;
        var ppresent = false;
        var index;
        for (var x = 0; x < this.state.thing.length; x++) {
          index = this.checkID(this.state.thing[x].data.id, nextNode);
          if (index || index === 0) {
            npresent = true;
          }
        }
        count = -1;
        index = null;
        for (var y = 0; y < this.state.thing.length; y++) {
          index = this.checkID(this.state.thing[y].data.id, prevNode);
          if (index || index === 0) {
            ppresent = true;
          }
        }
        count = -1;

        if (prevNode !== nextNode && npresent && ppresent) {
          var min = Math.min(nextNode, prevNode);
          var max = Math.max(nextNode, prevNode); //all edges have source.id < target.id, like quasi-undirected
          let present = false;

          pairs.forEach((pair) => {
            if (this.arrayEquals(pair, [min, max])) {
              present = true;
            }
          }); //checks if edge already exists

          if (!present) {
            pairs.push([min, max]);
            /*
            rand = Math.floor(501 + Math.random() * 1000);
            while (foo.includes(rand)) {
              rand = Math.floor(501 + Math.random() * 1000);
            } //creates edge id that doesn't already exist */
            rand = edge;
            foo.push(rand);
            console.log(rand);
            var joined = this.state.thing.concat({
              data: { id: rand, source: min, target: max },
            });
            this.setState({ thing: joined }); //adds edge to current elements
            edge++;
          } else {
            this.setState({ show: true });
            this.setState({ message: "This edge already exists!" });
          }
        } else {
          this.setState({ show: true });
          this.setState({
            message: "Please select two different nodes before adding an edge!",
          });
        }
        this.setState({ addEdge: false });
      } else {
        this.setState({ addEdge: true }); //signal from play to graph
      }
    } else {
      this.setState({ show: true });
      this.setState({
        message: "Must be stopped to add an edge!",
      });
      this.setState({ addEdge: false });
    }
  };

  checkNode(x, value) {
    if (x === value) {
      return true;
    }
    return false;
  }

  checkID(x, elementId) {
    count++;
    if (x === elementId) {
      return count;
    }
    return null;
  }

  handleRemove = (elementId) => {
    if (this.state.play === "Stop") {
      //for nodes and edges, removes element
      if (this.state.remove) {
        console.log(elementId);
        var copy = [...this.state.thing];
        var index;
        var realIndex = -1;
        for (var x = 0; x < copy.length; x++) {
          index = this.checkID(copy[x].data.id, elementId);
          if (index || index === 0) {
            realIndex = index;
          }
        }
        count = -1;
        if (realIndex !== -1) {
          for (var i = 0; i < foo.length; i++) {
            if (foo[i] === elementId) {
              foo.splice(i, 1);
            }
          }
          let tempArr = [
            copy[realIndex].data.source,
            copy[realIndex].data.target,
          ];
          for (var j = 0; j < pairs.length; j++) {
            if (this.arrayEquals(tempArr, pairs[j])) {
              pairs.splice(j, 1);
            }
          }
          copy.splice(realIndex, 1);
          this.setState({ thing: copy });
        } else {
          this.setState({ show: true });
          this.setState({
            message: "Please select an element before removing!",
          });
        }
        this.setState({ remove: false });
      } else {
        this.setState({ remove: true });
      }
    } else {
      this.setState({ show: true });
      this.setState({
        message: "Must be stopped to remove an element!",
      });
      this.setState({ remove: false });
    }
  };

  render() {
    return (
      <div>
        <DismissAlert
          show={this.state.show}
          message={this.state.message}
          onAlert={this.handleAlert}
        />
        <Play
          onChange={this.handleChange}
          onAddNode={this.handleAddNode}
          onRemove={this.handleRemove}
          onAddEdge={this.handleAddEdge}
        />
        <Cytoscape //passes basically everything, wanted to keep in app so more control
          play={this.state.play}
          playSet={this.state.playSet}
          addNode={this.state.addNode}
          addEdge={this.state.addEdge}
          remove={this.state.remove}
          onAddNode={this.handleAddNode}
          onRemove={this.handleRemove}
          onAddEdge={this.handleAddEdge}
          element={this.state.thing}
        />
      </div>
    );
  }
}

export default App;
