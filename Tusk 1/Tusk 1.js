function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
} 

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(convertCelsiusToFahrenheit(40)); 
console.log(convertFahrenheitToCelsius(104)); 