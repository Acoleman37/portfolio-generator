const generatePage = require('./Src/page-template');

const fs = require('fs');

// Captures user input data
const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log ('Portfolio complete! Checkout index.html to see the output!');
});