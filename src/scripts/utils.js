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

function handleOverscroll(event, element) {
  var scrollTop = element.scrollTop;
  var scrollHeight = element.scrollHeight;
  var height = element.offsetHeight;
  var delta = event.wheelDelta;
  var up = delta > 0;

  if (!up && -delta > scrollHeight - height - scrollTop) {
    // Scrolling down, but this will take us past the bottom.
    element.scrollTop = scrollHeight;
    return prevent(event);
  } else if (up && delta > scrollTop) {
    // Scrolling up, but this will take us past the top.
    element.scrollTop = 0;
    return prevent(event);
  }

  function prevent(event) {
    event.stopPropagation();
    event.preventDefault();
    event.returnValue = false;
    return false;
  }
}

export { range, forcePageReflow, handleOverscroll };
