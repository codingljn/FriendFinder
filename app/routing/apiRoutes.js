//Load Data
var friendMatch = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendMatch);
  });

  app.post('/api/friends', function(req,res){
    //capture the user's scores to compare with people in the fakeFriends array
    var userScores = req.body.results;
    var resultsArray = [];
    var matchCount = 0;
    var compMatch = 0;

    //goes through all current people on the fakeFriends array
    for(var i=0; i<friendMatch.length; i++){
      var matchSep = 0;
      //run through results and finds the separation score by comparing against fakeFriends
      for(var j=0; j<userScores.length; j++){
        matchSep += (Math.abs(parseInt(friendMatch[i].results[j]) - parseInt(userScores[j])));
      }

      //push results into resultsArray
      resultsArray.push(matchSep);
    }

    //Calculate the closest match to the people in the fakeFriends array
    for(var i=0; i<resultsArray.length; i++){
      if(resultsArray[i] <= resultsArray[compMatch]){
        compMatch = i;
      }
    }

    //return compMatch data
    var bff = friendMatch[compMatch];
    res.json(bff);

    //pushes new answers to the fakeFriends array
    friendMatch.push(req.body);
  });
};