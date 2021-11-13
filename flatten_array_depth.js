////////////////////////////////////////////////
// Recursive
////////////////////////////////////////////////
function flatten_recursive_helper(arr, result, depth) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (Array.isArray(elem) && depth > 0) {
      flatten_recursive_helper(elem, result, depth - 1);
    } else {
      result.push(elem);
    }
  }
}

function flatten_recursive(arr, depth = 1) {
  const result = [];
  flatten_recursive_helper(arr, result, depth);
  return result;
}

////////////////////////////////////////////////
// Iterative with stack
////////////////////////////////////////////////
function flatten_with_stack(arr, depth = 1) {
  const result = [];
  const stack = [...arr.map(elem => ([elem, depth]))];
  while (stack.length > 0) {
    const [top, top_depth] = stack.pop();
    if (Array.isArray(top) && top_depth > 0) {
      stack.push(...top.map(elem => ([elem, top_depth - 1])));
    } else {
      result.push(top);
    }
  }
  return result.reverse();
}
