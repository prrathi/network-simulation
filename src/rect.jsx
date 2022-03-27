import React from "react";

function Rect(props) {
  if (props.showRect && props.isPaused) {
    const txts = props.info.slice(3, props.info.length - 2);
    let widths = [];
    props.info.forEach((str) => widths.push(8 * str.length + 50));
    let bigWidths = [];
    for (var x = 1; x < widths.length; x += 2) {
      bigWidths.push(Math.max(widths[x], widths[x + 1]));
    }
    return (
      <React.Fragment>
        <div
          id="line"
          style={{
            width: "30px",
            height: "0px",
            top: props.top + "px",
            left: props.left - 10 + "px",
            position: "absolute",
            border: "1px solid black",
          }}
        ></div>
        <div
          id="rectangle"
          style={{
            width: bigWidths.reduce((a, b) => a + b, 0) + "px",
            height: "30px",
            backgroundColor: "white",
            borderRadius: "10px 10px 0px 0px",
            top: props.top - 45 + "px",
            left: props.left + "px",
            border: ".1px solid black",
            borderWidth: "thin",
            position: "absolute",
            textAlign: "center",
            color: "#8a3fd1",
            fontWeight: "bold",
          }}
        >
          {props.info[0]}
        </div>

        <div
          id="rectangle"
          style={{
            width: bigWidths[0] + "px",
            height: "30px",
            backgroundColor: "#8a3fd1",
            top: props.top - 15 + "px",
            left: props.left + "px",
            border: ".01px solid black",
            position: "absolute",
            textAlign: "center",
            color: "white",
          }}
        >
          {props.info[1]}
        </div>
        <div
          id="rectangle"
          style={{
            width: bigWidths[0] + "px",
            height: "30px",
            backgroundColor: "#8a3fd1",
            borderRadius: "0px 0px 0px 10px",
            top: props.top + 15 + "px",
            left: props.left + "px",
            border: ".01px solid black",
            position: "absolute",
            textAlign: "center",
            color: "white",
          }}
        >
          {props.info[2]}
        </div>
        {txts.map((txt) => (
          <div
            key={txt}
            id="rectangle"
            style={{
              width:
                bigWidths[
                  (props.info.indexOf(txt) -
                    ((props.info.indexOf(txt) + 1) % 2) -
                    1) /
                    2
                ] + "px",
              height: "30px",
              backgroundColor: "#8a3fd1",
              top: props.top + 15 - 30 * (props.info.indexOf(txt) % 2) + "px",
              left:
                props.left +
                bigWidths
                  .slice(
                    0,
                    (props.info.indexOf(txt) -
                      ((props.info.indexOf(txt) + 1) % 2) -
                      1) /
                      2
                  )
                  .reduce(function (a, b) {
                    return a + b;
                  }, 0) +
                "px",
              border: ".01px solid black",
              position: "absolute",
              textAlign: "center",
              color: "white",
            }}
          >
            {txt}
          </div>
        ))}
        <div
          id="rectangle"
          style={{
            width: bigWidths.slice(-1) + "px",
            height: "30px",
            backgroundColor: "#8a3fd1",
            top: props.top - 15 + "px",
            left:
              props.left +
              bigWidths.slice(0, -1).reduce(function (a, b) {
                return a + b;
              }, 0) +
              "px",
            border: ".01px solid black",
            position: "absolute",
            textAlign: "center",
            color: "white",
          }}
        >
          {props.info[props.info.length - 2]}
        </div>
        <div
          id="rectangle"
          style={{
            width: bigWidths.slice(-1) + "px",
            height: "30px",
            backgroundColor: "#8a3fd1",
            borderRadius: "0px 0px 10px 0px",
            top: props.top + 15 + "px",
            left:
              props.left +
              bigWidths.slice(0, -1).reduce(function (a, b) {
                return a + b;
              }, 0) +
              "px",
            border: ".01px solid black",
            position: "absolute",
            textAlign: "center",
            color: "white",
          }}
        >
          {props.info[props.info.length - 1]}
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
}

export default Rect;
