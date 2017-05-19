var tweetArray = ['00']; //global array variable
var timeDelay;

function sendToServer(tweet, delay) {
  fetch('http://localhost:3000/tweets/', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "tweet_text": tweet,
      "number_of_likes": 14,
      "number_of_retweets": 53,
      "number_of_replies": 345,
      "number_of_impressions": 1034,
      "location": "San Franciso, CA",
      "date_time": new Date(),
      "delay": delay
    })
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    window.location.href = "http://localhost:3000/twitter_profile.html"
    console.log('parsed json: ', json)
  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });
}


$(document).ready(function() {

  console.log("works");
  var counter = 140;
  $('.clock').click(function() {
    console.log("you");
    if ($('select').prop('disabled') == true) {
      $('select').prop('disabled', false);
    } else {
      $('select').prop('disabled', true);
    }
  });

  $('#submit').mouseenter(function() {
    console.log("enter");
    $('#submit').attr('src', 'twitter_profile_files/button-tp.png');
  });
  $('#submit').mouseleave(function() {
    $(this).attr('src', 'twitter_profile_files/button-t.png');
  });

  //clicking submit
  $('#submit').click(function() {
    var pollCheck = true
    pollingW();

    function pollingW() {
      console.log("submit");
      if ($('select').prop('disabled') == true) {
        timeDelay = 0;
      } else {
        var timeDelay = document.getElementById('time').value
      }

      var tweet_input = document.getElementById('tweet')
      if (tweetArray[0] != "00") {
        tweetArray.push(tweet_input.value)
      } else {
        tweetArray[0] = tweet_input.value
      }
      console.log("time delay: " + timeDelay + " ms")

      if(pollCheck) {
        console.log("Im here")
        pollCheck = false
        setTimeout(pollingW, timeDelay * 1000 + 1000)
      }

      sendToServer(tweetArray[tweetArray.length - 1], timeDelay)
    }
  });

  angular.module('ModalModule', [])
    .controller('ModalController', function($scope) {
      $scope.myText = 'aaa';
    });

});
