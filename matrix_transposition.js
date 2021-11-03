function transpose(matrix) {
  let finalresult = matrix.reduce(
    (result, smallArray) =>
      smallArray.map((element, index) => (result[index] || []).concat(element)),
    []
  );
  return finalresult;
}
module.exports = transpose;
