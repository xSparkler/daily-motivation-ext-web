// Get references to the DOM elements we need
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote-btn');
const body = document.body;

// A list of motivational quotes
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" }
];

// A list of color schemes (Tailwind CSS classes) for the background gradient
const colorSchemes = [
    "from-purple-200 to-pink-200",
    "from-teal-200 to-blue-200",
    "from-yellow-200 to-green-200",
    "from-indigo-200 to-fuchsia-200",
    "from-rose-200 to-orange-200"
];

// Function to get a random item from an array
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to update the quote and background color
function updateContent() {
    // Get a random quote and update the text
    const randomQuote = getRandomItem(quotes);
    quoteText.textContent = `"${randomQuote.text}"`;

    // Remove previous background classes and add a new random one
    const currentClasses = body.className.split(' ');
    const newClasses = currentClasses.filter(c => !c.startsWith('from-') && !c.startsWith('to-'));
    const randomColorScheme = getRandomItem(colorSchemes);
    body.className = `${newClasses.join(' ')} ${randomColorScheme}`;
}

// Add a click event listener to the button
newQuoteBtn.addEventListener('click', updateContent);

// Set an initial random quote and color on page load
window.onload = updateContent;