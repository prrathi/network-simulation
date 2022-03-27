(this["webpackJsonpsim"] = this["webpackJsonpsim"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.button-wrapper {\n  text-align: center;\n  display: inline-block;\n  margin: 20px;\n}\n\n.button {\n  float: right;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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

/***/ }),

/***/ "./src/components/alert.jsx":
/*!**********************************!*\
  !*** ./src/components/alert.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Alert */ "../../../node_modules/react-bootstrap/esm/Alert.js");
var _jsxFileName = "/Users/praneet/developer/react/sim2/src/components/alert.jsx";



class DismissAlert extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (this.props.show) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
        variant: "danger",
        onClose: () => this.props.onAlert(),
        dismissible: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }
      }, this.props.message);
    }

    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DismissAlert);

/***/ }),

/***/ "./src/components/graph.jsx":
/*!**********************************!*\
  !*** ./src/components/graph.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cytoscapejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cytoscapejs */ "../../../node_modules/react-cytoscapejs/dist/react-cytoscape.js");
/* harmony import */ var react_cytoscapejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cytoscapejs__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/praneet/developer/react/sim2/src/components/graph.jsx";


let cyStyle = {
  height: "500px",
  width: "1000px"
};
var firstId;
var secondId = 0;
let layoutOg = {
  name: "preset",
  fit: true,
  padding: 30,
  avoidOverlap: true,
  avoidOverlapPadding: 10,
  condense: false
};

class Cytoscape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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

    this.noteNode = () => {
      //listener for user tapping node
      this.cy.on("tap", "node", function (evt) {
        firstId = secondId;
        secondId = evt.target.id();
      });
    };

    this.noteNode = this.noteNode.bind(this);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.noteNode();
  }

  componentDidUpdate() {
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
    } //receives signal to add edge from play, then sends previous two elements selected to create node
    //after being called, gets reset so must select two more after button pressed before adding next edge

  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_cytoscapejs__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elements: this.props.element,
      style: cyStyle,
      stylesheet: [{
        selector: "node",
        style: {
          width: 10,
          height: 10
        }
      }, {
        selector: "edge",
        style: {
          width: 1
        }
      }],
      layout: layoutOg,
      minZoom: 0.2,
      maxZoom: 5,
      cy: cy => {
        this.cy = cy;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Cytoscape);

/***/ }),

/***/ "./src/components/play.jsx":
/*!*********************************!*\
  !*** ./src/components/play.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/praneet/developer/react/sim2/src/components/play.jsx";



class Play extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      setShow: true
    };
  }

  render() {
    return (
      /*#__PURE__*/

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
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onChange("Pause"),
        className: "btn btn-danger btn-lg m-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      }, "Pause"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onChange("Step"),
        className: "btn btn-warning btn-lg m-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, "Step"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onChange("Play"),
        className: "btn btn-success btn-lg m-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, "Play"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onRemove(),
        className: "btn btn-dark btn-lg m-2 button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "Remove"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onAddEdge(),
        className: "btn btn-light btn-lg m-2 button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }
      }, "Add Edge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.props.onAddNode(),
        className: "btn btn-light btn-lg m-2 button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, "Add Node"))
    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Play);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/praneet/developer/react/sim2/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/praneet/developer/react/sim2/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/praneet/developer/react/sim2/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/praneet/developer/react/sim2/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map