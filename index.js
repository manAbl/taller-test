// Sorted Squared Array

const inputs = [[1, 2, 3, 5, 6, 8, 9], [1, 2, 3, 5, 6, 8, 9], [-2, -1], [-10, -5, 0, 5, 10]];

const squaredArray = (integersArray) =>  {
  return integersArray.map(num => Math.pow(num, 2))
}
