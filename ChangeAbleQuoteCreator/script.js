const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "- Steve Jobs",
    image: "img/images1.jpg"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "- Albert Schweitzer",
    image: "img/images2.jpg"  },
  {
    text: "The best preparation for tomorrow is doing your best today.",
    author: "- H. Jackson Brown Jr.",
    image: "img/images3.jpg"  },
  {
    text: "Believe you can and you're halfway there.",
    author: "- Theodore Roosevelt",
    image: "img/images4.jpg"  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "- Eleanor Roosevelt",
    image: "img/images5.jpg"  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "- Sam Levenson",
    image: "img/images6.jpg"  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "- Franklin D. Roosevelt",
    image: "img/images7.jpg"  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "- Steve Jobs",
    image: "img/images8.jpeg"  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "- Winston Churchill",
    image: "img/images9.jpeg"  },
  {
    text: "The best way to predict the future is to create it.",
    author: "- Peter Drucker",
    image: "img/images1.jpg"  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "- Nelson Mandela",
    image: "img/images2.jpg"  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "- John Lennon",
    image: "img/images3.jpg"  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "- Albert Einstein",
    image: "img/images4.jpg"  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "- Wayne Gretzky",
    image: "img/images5.jpg"  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "- Ralph Waldo Emerson",
    image: "img/images6.jpg"  },
  {
    text: "The future depends on what you do today.",
    author: "- Mahatma Gandhi",
    image: "img/images7.jpg"  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "- Confucius",
    image: "img/images8.jpeg"  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "- Walt Disney",
    image: "img/images9.jpeg"  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "- Christian D. Larson",
    image: "img/images1.jpg"  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "- Henry David Thoreau",
    image: "img/images2.jpg"  },
  {
    text: "Aim for the moon. If you miss, you may hit a star.",
    author: "- W. Clement Stone",
    image: "img/images8.jpeg"  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  quoteElement.textContent = quote.text;
  authorElement.textContent = quote.author;

  // Apply the random background image
  document.body.style.backgroundImage = `url(${quote.image})`;
}

generateQuote();

document.getElementById("new-quote").addEventListener("click", generateQuote);
