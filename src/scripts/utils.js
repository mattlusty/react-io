function range(from, to) {
  console.log("from -- to: ", from + " -- " + to);
  let result = [];
  from = Math.trunc(from);
  to = Math.trunc(to);
  for (let i = from; i < to + 1; i++) {
    result.push(i);
  }
  return result;
}

function toggleBool(boolvalue, bool) {
  if (bool === undefined) {
    return !boolvalue;
  }
  if (bool === true) {
    return true;
  } else if (bool === false) {
    return false;
  }
}

function forcePageReflow(content) {
  let x = content.offsetWidth;
  return x;
}

export { range, toggleBool, forcePageReflow };
