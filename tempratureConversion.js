// celsius
// fahrenheit
// kelvin

// kelvin to celsius
// Celsius = Kelvin - 273.15

// kelvin to fahrenheit
// Fahenheit = (Kelvin − 273.15) × 9/5 + 32
const kelvinConverter = (temprature) => {
  let celsius = (temprature - 273.15);
  let fahrenheit = ((temprature - 273.15) * 1.8 + 32);
  let celsius1 = celsius.toFixed(2);
  let fahrenheit1 = fahrenheit.toFixed(2);

  return { celsiusTemp: celsius1, fahrenheitTemp: fahrenheit1 };
};
let abc = kelvinConverter(123);
console.log(abc);

//  {celsuisTemp : celsius, fahrenheitTemp : fahrenheit };
// abc?.celsiusTemp
// abc?.fahrenheitTemp

// celsius to fahrenheit
// Fahrenheit = (9/5 × Celsius) + 32.

// celsius to kelvin
// T (Kelvin) = T (celsius) + 273.15.
const celsiusConverter = (temprature) => {
  let kelvin = (temprature - 273.15);
  let fahrenheit = (1.8 * temprature + 32).toFixed(2);
  let kelvin1 = kelvin.toFixed(2);
  let fahrenheit1 = fahrenheit.toFixed(2);

  return { kelvinTemp: kelvin1, fahrenheitTemp: fahrenheit1 };
};
let xyz = celsiusConverter(123);
console.log(xyz);
// {kelvinTemp: kelvin, fahrenheitTemp: fahrenheit};
// xyz?.kelvinTemp;
// xyz?.fahrenheitTemp;

// fahrenheit to celsius
// Celsius = (Fahrenheit - 32) × 5/9;

// fahrenheit to kelvin
// Kelvin = (Fahrenheit − 32) × 5 ⁄ 9 + 273.15
const fahrenheitConverter = (temprature) => {
  let kelvin = (temprature - 32) * 1.8 + 273.15;
  let celsius = (temprature - 32) * 1.8;
  let kelvin1 = kelvin.toFixed(2);
  let celsius1 = celsius.toFixed(2);
  return { kelvinTemp: kelvin1, celsiusTemp: celsius1 };
};
let efg = fahrenheitConverter(123);
console.log(efg);

// {kelvinTemp : kelvin , celsiusTemp : celsius};
// egf?.kelvinTemp
// efg?.celsiusTemp
