// Tristan Berezowski
// GitHub avatar download program init Feb 11 2019


function getRepoContributors(rOwner, rName, cb) {
  var token = require('./hidden.js');
  var authorization = 'token ' + token;
  var options = {
    url: "https://api.github.com/repos/" + rOwner + "/" + rName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': authorization
    }
  };
  request(options, function(err, res, body) {
    body = JSON.parse(body);
    cb(err, body);
  });
}
//----------------------------------------------
function downloadImageByUrl(url, filepath) {
  request.get(url)
  .on('error', function (err) {
    throw err; 
  })
  .pipe(fs.createWriteStream(filepath));
}

//----------------------------------------------Calling

var request = require('request');
var fs = require('fs');
console.log('Welcome to the GitHub Avatar Downloader!');
var rOwner = process.argv[2];
var rName = process.argv[3];
if (!rOwner || !rName) {
  console.log('Need to give RepoOwner followed by RepoName');
  console.log('Example: node downloadAvatars.js jQuery jQuery');
  return;
}
getRepoContributors(rOwner, rName, function(err, result) {
  console.log("Errors:", err);
  for(var i = 0; i < result.length; i++) {
    downloadImageByUrl(result[i].avatar_url,'./Testing/' + result[i].login + '.jpg');
  }
});




/*
// Below is for reference mainly
request.get('https://api.github.com/repos/jquery/jquery/contributors')
       .on('error', function (err) {
         throw err; 
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log(response)
       })
       //.pipe(fs.createWriteStream('./downloaded.html'));
       */

       // data = JSON.parse(data)