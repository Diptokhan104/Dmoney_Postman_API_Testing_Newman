const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:`'https://api.postman.com/collections/29721674-fb936103-8e8a-473e-b0b1-ccf7e9fd59ba?access_key=${process.env.accessKey}'`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});