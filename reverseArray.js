let A = [1, 2, 5, 6, 3, 4]

function reverse (A) {
  for (let i = 0; i < A.length / 2; i++) {
    let j = A[i];
    A[i] = A[A.length - 1 - i];
    A[A.length - 1 - i] = j;
  }

  return A;
}

console.log(reverse(A));