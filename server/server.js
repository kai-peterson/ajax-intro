let express = require('express');
let app = express();
let PORT = 5000;

// AJAX = Asynchronous Javascript and XML

app.use(express.static('server/public'));

let quotesData = [
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

app.get('/quotes', (req, res) => {
    res.send(quotesData);
})

app.post('/quotes', (req, res) => {
    res.send(quotesData);
})

app.get('/new-quote', (req, res) => {
    let quote = {quote: 'I love learning', author: 'Everyone'};
    // quotesData.push(data);
    quotesData.push(quote);
    res.send(quote);
})

app.listen(PORT, () => {
    console.log('Running on port:', PORT);  
});