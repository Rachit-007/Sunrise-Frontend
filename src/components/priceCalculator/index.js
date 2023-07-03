/**

* Function to convert Int Amount to Decimal

*

* @param {Object} - { centAmount, fractionDigits }

* @returns - Price with Decimal

*/

const getPrice = ({ centAmount, fractionDigits }) => {
  const price = centAmount / Math.pow(10, fractionDigits);
  return price;
};

export { getPrice };
