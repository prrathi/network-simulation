webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/play */ "./src/components/play.jsx");
/* harmony import */ var _components_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graph */ "./src/components/graph.jsx");
/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/alert */ "./src/components/alert.jsx");
var _jsxFileName = "/Users/praneet/developer/react/sim2/src/App.js";





let rand; //used to make ids of elements (nodes+edges)

let foo = [1, 2, 501]; //keep track of ids of elements

let count = -1; //used to search through elements when removing

let pairs = [[1, 2]]; //keep track of source/target of edges

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      show: false,
      message: "",
      play: "Pause",
      addNode: false,
      addEdge: false,
      remove: false,
      thing: [{
        data: {
          id: 1
        },
        position: {
          x: 50,
          y: 40
        }
      }, {
        data: {
          id: 2
        },
        position: {
          x: 100,
          y: 40
        }
      }, {
        data: {
          id: 101,
          source: 1,
          target: 2
        }
      } //this is the format fed into cytoscape
      ]
    };

    this.handleAlert = () => {
      this.setState({
        show: false
      });
    };

    this.handleChange = newPlay => {
      if (this.state.play !== newPlay) {}

      this.setState({
        play: newPlay
      }); //changing pause/step/play mode
    };

    this.handleAddNode = () => {
      if (this.state.addNode) {
        //after graph receives signal
        rand = Math.floor(1 + Math.random() * 500);

        while (foo.includes(rand)) {
          rand = Math.floor(1 + Math.random() * 500);
        } //creates node id that doesn't already exist


        foo.push(rand);
        var joined = this.state.thing.concat({
          data: {
            id: rand
          },
          position: {
            x: 75,
            y: 70
          }
        });
        this.setState({
          thing: joined
        }); //adds node to current elements

        this.setState({
          addNode: false
        });
      } else {
        this.setState({
          addNode: true
        }); //signal from play to graph
      }
    };

    this.handleAddEdge = (nextNode, prevNode) => {
      if (this.state.addEdge) {
        console.log([nextNode, prevNode]);
        console.log(foo); //after graph receives signal

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

        for (var x = 0; x < this.state.thing.length; x++) {
          index = this.checkID(this.state.thing[x].data.id, prevNode);

          if (index || index === 0) {
            ppresent = true;
          }
        }

        count = -1;

        if (prevNode !== nextNode && npresent && ppresent) {
          var min = Math.min(nextNode, prevNode);
          var max = Math.max(nextNode, prevNode); //all edges have source.id < target.id, like quasi-undirected

          let present = false;

          function arrayEquals(a, b) {
            return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
          }

          pairs.forEach(pair => {
            if (arrayEquals(pair, [min, max])) {
              present = true;
            }
          }); //checks if edge already exists

          if (!present) {
            pairs.push([min, max]);
            rand = Math.floor(501 + Math.random() * 1000);

            while (foo.includes(rand)) {
              rand = Math.floor(501 + Math.random() * 1000);
            } //creates edge id that doesn't already exist


            foo.push(rand);
            console.log(rand);
            var joined = this.state.thing.concat({
              data: {
                id: rand,
                source: min,
                target: max
              }
            });
            this.setState({
              thing: joined
            }); //adds edge to current elements
          } else {
            this.setState({
              show: true
            });
            this.setState({
              message: "This edge already exists!"
            });
          }
        } else {
          this.setState({
            show: true
          });
          this.setState({
            message: "Please select two different nodes before adding an edge!"
          });
        }

        this.setState({
          addEdge: false
        });
      } else {
        this.setState({
          addEdge: true
        }); //signal from play to graph
      }
    };

    this.handleRemove = elementId => {
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
          copy.splice(realIndex, 1);
          this.setState({
            thing: copy
          });
        } else {
          this.setState({
            show: true
          });
          this.setState({
            message: "Please select an element before removing!"
          });
        }

        this.setState({
          remove: false
        });
      } else {
        this.setState({
          remove: true
        });
      }
    };
  }

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

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_alert__WEBPACK_IMPORTED_MODULE_4__["default"], {
      show: this.state.show,
      message: this.state.message,
      onAlert: this.handleAlert,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_play__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: this.handleChange,
      onAddNode: this.handleAddNode,
      onRemove: this.handleRemove,
      onAddEdge: this.handleAddEdge,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_graph__WEBPACK_IMPORTED_MODULE_3__["default"] //passes basically everything, wanted to keep in app so more control
    , {
      play: this.state.play,
      addNode: this.state.addNode,
      addEdge: this.state.addEdge,
      remove: this.state.remove,
      onAddNode: this.handleAddNode,
      onRemove: this.handleRemove,
      onAddEdge: this.handleAddEdge,
      element: this.state.thing,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.88c7b770e085baa4c9d2.hot-update.js.map