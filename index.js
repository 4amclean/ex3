function randomQu(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
var quotes = [
  "Dont let yesterday take up too much of today",
  "never say never",
  "Creativity is intelligence having fun",
];
console.log(randomQu(quotes));
