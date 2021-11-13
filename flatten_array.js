////////////////////////////////////////////////
// Recursive
////////////////////////////////////////////////
function flatten_recursive_helper(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (Array.isArray(elem)) {
      flatten_recursive_helper(elem, result);
    } else {
      result.push(elem);
    }
  }
}

function flatten_recursive(arr) {
  const result = [];
  helper(arr, result);
  return result;
}

////////////////////////////////////////////////
// Iterative with stack
////////////////////////////////////////////////
function flatten_with_stack(arr) {
  const result = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const top = stack.pop();
    if (Array.isArray(top)) {
      stack.push(...top);
    } else {
      result.push(top);
    }
  }
  return result.reverse();
}
