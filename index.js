// Sorted Squared Array
{
  const inputs = [
    [1, 2, 3, 5, 6, 8, 9],
    [-2, -1],
    [-10, -5, 0, 5, 10],
  ];

  const squaredArray = (integersArray) => {
    return integersArray.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
  };

  console.log(squaredArray(inputs[0]));
}


// Non-Constructible Change
{
  const inputs = [[5, 7, 1, 1, 2, 3, 22]];
  const nonConstructibleChange = (numbers) => {
    const max = Math.max(numbers);
    const min = Math.min(numbers);
    const result = 0;
    // Get min and max
    // Evaluate from the min to the max all the possible `change` numbers
    // Find the numbers in between that meet the criteria

    return result;
  }
}