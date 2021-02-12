let A = [1, 1, 1, 2, 2, 3, 3, 4, 5];
let B = [1, 2, 2, 2, 2, 3, 3, 4, 5, 5];


function checkEqual (A, B) {
  let a = A.length - 1;
  let b = B.length - 1;
  
  let smallestA = A[a];
  let smallestB = B[b];

  while (a !== 0 && b !== 0) {
    console.log("A[" + a + "]:" + A[a] + "B[" + b + "]:" + B[b]);
    if (smallestA === smallestB) {
      while (smallestA === A[a] && a !== 0) {
        a--;
      }
      smallestA = A[a];

      while (smallestB === B[b] && b !== 0) {
        b--;
      }
      smallestB = B[b];
    } else {
      return false;
    }
  }

  if (smallestA === smallestB) {
    return true;
  } else {
    return false;
  }
}

console.log(checkEqual(A, B));