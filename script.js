const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const instagramBtn = document.getElementById('instagram');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];



// Show New Quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) ];
    authorText.textContent = quote.author;
    // Check Quote lenght to determine styling
    if (quote.text.lenght > 30) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        //  Catch Error Here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank');
}

// Fcebook Quote
function facebookQuote() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgrand-churros-0582c2.netlify.app%2F&amp;src=sdkpreparse ${quoteText.textContent} - ${authorText.textContent}`
    window.open(facebookUrl, '_blank');
}

// Instagram Quote
function instagramQuote() {
    const instagramUrl = `http://instagram.com/sharer.php?u=${quoteText.textContent} - ${authorText.textContent}`
    window.open(instagramUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
facebookBtn.addEventListener('click', facebookQuote);
instagramBtn.addEventListener('click', instagramQuote);


// On Load
getQuotes();
