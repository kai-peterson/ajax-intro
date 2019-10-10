$(document).ready(readyNow);

let quotes;

function readyNow() {
    console.log('jQuery is ready');
    appendQuotes();
    $('#add-quote').on('click', addQuote);
}

function sendToDisplay(res) {
    res.forEach(function (quote) {
        $('.list').append(`<li>${quote.quote}</li>`);
    })
}

function appendQuotes() {
    $.ajax({
        url: 'http://localhost:5000/quotes',  // just /quotes would work
        method: 'GET'
    }).then(function (response) {
        sendToDisplay(response);
    })
};

function addQuote() {
    let quote = $('#quote').val();
    let author = $('#author').val();
    let newQuote = {quote: quote, author: author};

    $.ajax({                                  // $.ajax is a method that takes in an object
        url: 'http://localhost:5000/quotes',  // just /quotes would work
        method: 'GET'
    }).then(function (response) {
        $.ajax({
            url: '/new-quote',
            method: 'GET'
        }).then(function (res) {
            response.push(res);
            $('.list').empty();
            sendToDisplay(response);
        });
    });
}