const quoteContainer = document.getElementById('main-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQoteBtn = document.getElementById('new-quote');

let quotes = [];

//get a new random quote
function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteAuthor.textContent = quote.author;
  quoteText.textContent = quote.text;
}
// Get quotes from API
async function getQuotes() {
  const url = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(url);
    quotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(object);
  }
}

//on load
getQuotes();
