var tweetDataArray = []

$('#submit').click(function(){
  var tweet_input = document.getElementById('tweet')
  var mainDiv = document.getElementById('content')


  var timeDelay = document.getElementById('time').value * 1000
  console.log("time delay: " + timeDelay + " ms")
  window.setTimeout(function(){
    var tweet_value = document.createElement('h1');
    tweet_value.innerHTML = tweet_input.value;

    mainDiv.appendChild(tweet_value);
  }, timeDelay)
});

function tweetObj(tweet, time){
    this.tweet = tweet;
    this.date = time;
}
