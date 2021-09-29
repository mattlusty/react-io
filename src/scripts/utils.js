function range(from, to) {
  let result = [];
  from = Math.trunc(from);
  to = Math.trunc(to);
  for (let i = from; i < to + 1; i++) {
    result.push(i);
  }
  return result;
}

function forcePageReflow(content) {
  let x = content.offsetWidth;
  return x;
}

export { range, forcePageReflow };
