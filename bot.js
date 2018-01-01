console.log('The bot is running');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'kWC256eHeGQDUXcUrrlfutfgw',
  consumer_secret:      'SD0GkzdkMhR2AWv7tTaRMOwBJdmfjUxjvHUAurZfsafKBhyAJP',
  access_token:         '944989250801537025-4rXgPTd4GFhkhxJA3xJlpVrWR292OVZ',
  access_token_secret:  'HW51RDkSmuWOX2wWKHdvW7WKwyYqU2tLtcij7CMhnVTbs',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

/*/////////////////////////////////////////////////////////////////////////////////////////
//This is how to search twitter for tweets with rainbow in them and just return the tweet itslef and not the JSON.
var f ={
     q: 'rainbow', 
     count: 2 }

function GotData(err, data, response){
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){
           console.log(tweets[i].text);
    }
}

T.get('search/tweets', f , GotData);
//////////////////////////////////////////////////////////////////////////////////////////





*///////////////////////////////////////////////////////////////////////////////////////////
//This how to reply to someone who follows you, remember you need to change the tweet it function to accept parameters!!!!
/*
var stream = T.stream('user');

stream.on('follow', followed);

function followed(event){
  console.log('new follower');
     var name = event.source.name;
     var screenName = event.source.screen_name;
     tweetIt('@' + screenName + ' It worked');
}

*///////////////////////////////////////////////////////////////////////////////






/*///////////////////////////////////////////////////////////////////////////////////////
//This is how to just post to twitter using a simple post
var tweet = {
   status: 'hello world!' 
  }

T.post('statuses/update', tweet, tweeted1);

function tweeted1(err, data, response) {
  console.log('It Worked');
}

*///////////////////////////////////////////////////////////////////////////////////////



/*/////////////////////////////////////////////////////////////////////////////////////
//This is how to create a picture using processing and then upload it to twitter
//tweetIt();
//setInterval(tweetIt, 1000*20); This is used so it will post every 20 seconds

/*
var exec = require('child_process').exec;
var fs = require('fs');

function tweetIt(){

var cmd = 'processing-java --sketch="%cd%\\rainbow" --run';
exec(cmd, processing);

function processing(){
  var filename = 'rainbow/output.png';
  var params = {
    encoding: 'base64'
  }
   var b64 = fs.readFileSync(filename, params);

   T.post('media/upload',{media_data: b64}, uploaded);

   function uploaded(err,data,response){
       var id = data.media_id_string;
       var tweet = {
            status: 'Live from bot.js yupppa',
            media_ids : [id]
      }
      T.post('statuses/update', tweet , tweeted);
   }
}
    
 function tweeted(err, data, response) {
   if(err){
     console.log('not working');
   }else{
      
     console.log('It Worked');
 }
}

}
*////////////////////////////////////////////////////////////////////////////////////////////




/*//////////////////////////////////////////////////////////////////////////////////////////////
//This replies to someone who tweets to you and thanks them for following

var stream = T.stream('user');


stream.on('follow', followed);


function followed(event) {
  var name = event.source.name;
  var screenName = event.source.screen_name;
  console.log('I was followed by: ' + name + ' ' + screenName);
}


stream.on('tweet', tweetEvent);

!
function tweetEvent(tweet) {

  // If we wanted to write a file out
  // to look more closely at the data
  // var fs = require('fs');
  // var json = JSON.stringify(tweet,null,2);
  // fs.writeFile("tweet.json", json, output);

  
  var reply_to = tweet.in_reply_to_screen_name;
 
  var name = tweet.user.screen_name;
 
  var txt = tweet.text;
 
  var id = tweet.id_str;

  // Ok, if this was in reply to me
  // Tweets by me show up here too
  if (reply_to === 'x00126748') {

    
    txt = txt.replace(/@x00126748/g,'');

    // Start a reply back to the sender
    var replyText = '@'+name + ' ';
    // Reverse their text
    for (var i = txt.length-1; i >= 0; i--) {
      replyText += txt.charAt(i);
    }

    // Post that tweet
    T.post('statuses/update', { status: replyText, in_reply_to_status_id: id}, tweeted);

    // Make sure it worked!
    function tweeted(err, reply) {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Tweeted: ' + reply.text);
      }
    }
  }
}
*////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////
// This is too tweet a random number every 20 seconds

tweetIt();
setInterval(tweetIt, 1000*20);

function tweetIt(){

  var r = Math.floor(Math.random()*100);

  var tweet = {
    status: 'random number' + r + '#getdoneson'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err,data,response){
      if(err){
        console.log('Something went wrong');
      }else{
        console.log('it worked');
      }
  }

}

////////////////////////////////////////////////////////////////////////////////////////////////////