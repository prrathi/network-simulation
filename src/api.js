import React from "react";

function packetSend(source, target, info) {
  let isint = true;
  for (x in target) {
    if (!Number.isInteger(x)) {
      isint = false;
    }
  }
  if (Number.isInteger(source) && isint) {
  }
}
