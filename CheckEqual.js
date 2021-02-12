let A = [1, 1, 1, 2, 2, 3, 3, 4, 5];
let B = [1, 2, 2, 2, 2, 2, 3, 4, 5];

function checkEqual (A, B) {
  let a = 0;
  let b = 0;

  while (a < A.length || b < B.length) {
    if (A[a] === B[b]) {
      if (a === A.length - 1) {
        b++;
      } else if (b === B.length -1) {
        a++;
      } else {
        a++;
        b++;
      }
    } else if (A[a] - 1 == B[b]) {
      b++;
    } else if (B[b] - 1 == A[a]) {
      a++;
    } else {
      return false;
    }
  }

  return true;
}

console.log(checkEqual(A, B));