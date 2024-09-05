// Kelvin to Celsius and Fahrenheit
const kelvinConverter = (temperature) => {
  let celsius = temperature - 273.15;
  let fahrenheit = (temperature - 273.15) * 1.8 + 32;
  return { celsiusTemp: celsius.toFixed(2), fahrenheitTemp: fahrenheit.toFixed(2) };
};

// Celsius to Kelvin and Fahrenheit
const celsiusConverter = (temperature) => {
  let kelvin = temperature + 273.15;
  let fahrenheit = (temperature * 1.8) + 32;
  return { kelvinTemp: kelvin.toFixed(2), fahrenheitTemp: fahrenheit.toFixed(2) };
};

// Fahrenheit to Celsius and Kelvin
const fahrenheitConverter = (temperature) => {
  let celsius = (temperature - 32) * 5/9;
  let kelvin = (temperature - 32) * 5/9 + 273.15;
  return { kelvinTemp: kelvin.toFixed(2), celsiusTemp: celsius.toFixed(2) };
};

function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperatureInput').value);
  const conversionType = document.getElementById('conversionType').value;
  let result = '';

  if (isNaN(temperature)) {
      result = 'Please enter a valid number.';
  } else {
      switch (conversionType) {
          case 'kelvinToCelsius':
              const kelvinResult = kelvinConverter(temperature);
              result = `Celsius: ${kelvinResult.celsiusTemp} °C<br>Fahrenheit: ${kelvinResult.fahrenheitTemp} °F`;
              break;
          case 'celsiusToKelvin':
              const celsiusResult = celsiusConverter(temperature);
              result = `Kelvin: ${celsiusResult.kelvinTemp} K<br>Fahrenheit: ${celsiusResult.fahrenheitTemp} °F`;
              break;
          case 'fahrenheitToKelvin':
              const fahrenheitResult = fahrenheitConverter(temperature);
              result = `Kelvin: ${fahrenheitResult.kelvinTemp} K<br>Celsius: ${fahrenheitResult.celsiusTemp} °C`;
              break;
          default:
              result = 'Invalid conversion type.';
      }
  }

  document.getElementById('result').innerHTML = result;
}
