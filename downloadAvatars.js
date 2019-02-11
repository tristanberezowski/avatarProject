// Tristan Berezowski
// GitHub avatar download program init Feb 11 2019


// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');







// Below is for reference mainly
request.get('https://api.github.com/repos/jquery/jquery/contributors')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Response Status Code: ', response.statusCode);
         console.log(response)
       })
       //.pipe(fs.createWriteStream('./downloaded.html'));               // Note 4