////////////////////////////////////////////////
// Compute by reading one or two
////////////////////////////////////////////////
function roman_to_int_read(str) {
  const symbol_to_val = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);

  let result = 0;
  let i = 0;
  while(i < str.length) {
    const next_char = (i == str.length - 1 ? "" : str[i + 1]);
    let curr_val = symbol_to_val.get(str[i] + next_char);
    if (curr_val) {
      result += curr_val;
      i += 2;
    } else {
      result += symbol_to_val.get(str[i]);
      i++;
    }
  }
  return result;
}

////////////////////////////////////////////////
// Compute from front
////////////////////////////////////////////////
function roman_to_int_front(str) {
  const symbol_to_val = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;
  let prev_val = 0;
  for(let i = 0; i < str.length; i++) {
    const curr_val = symbol_to_val.get(str[i]);
    result += curr_val;
    if (curr_val > prev_val) result -= prev_val * 2;
    prev_val = curr_val;
  }
  return result;
}

////////////////////////////////////////////////
// Compute from back
////////////////////////////////////////////////
function roman_to_int_back(str) {
  const symbol_to_val = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let result = 0;
  let prev_val = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    const curr_val = symbol_to_val.get(str[i]);
    if (curr_val >= prev_val) result += curr_val;
    else result -= curr_val;
    prev_val = curr_val;
  }
  return result;
}
