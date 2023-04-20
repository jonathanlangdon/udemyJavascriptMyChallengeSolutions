// function getCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

const getCelsius = fahrenheit => {
  return `The temp is ${Math.floor((fahrenheit - 32) * 5 / 9)} \xB0C`
};

console.log(getCelsius(120));

const minMax = arr => ({min: Math.min(...arr), max: Math.max(...arr)});

console.log(minMax([3,31,6,7,13]));

// (function(length, width) {
//   console.log(`With length of ${length} and width of ${width} is ${length * width}`);
// })(32, 50);

((length, width) => console.log(`With length of ${length} and width of ${width} is ${length * width}`)
)(2, 50);