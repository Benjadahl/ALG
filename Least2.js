let A = [4, 3, 5, 2, 1];

function twoLeast (A) {
  let j = A[0];
  let k = A.length > 1 ? A[1] : A[0];
  
  for (let i = 0; i < A.length; i++) {
    if (A[i] < j) {
      k = j;
      j = A[i];
    }
  }

  return [j, k];
}

console.log(twoLeast(A));
console.log(twoLeast([1, 2, 4, 5]));
console.log(twoLeast([5, 4, 3, 2, 1]));
console.log(twoLeast([500, 450, 1060, 532, 64562, 34512]));
console.log(twoLeast([234823, 53490, 13490, 234905, 1239123]));
console.log(twoLeast([1]));