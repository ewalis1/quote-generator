const quoteContainer = document.getElementById('main-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let quotes = [];

//get a new random quote
function newQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  if (!quote.author) {
    quoteAuthor.textContent = 'Unknown';
  } else {
    quoteAuthor.textContent = quote.author;
  }
  if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }
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

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, '_blank');
}

//on load
getQuotes();

//Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
