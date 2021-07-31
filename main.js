// Use stopwatch as a constructor with `this` being the created object:
var watch = new Stopwatch();

// Bind the event handlers to both the buttons. No more HTML `onclick` attributes.
jQuery('#start').click(watch.start);
jQuery('#stop').click(function(){
  if (watch.getSeconds() === null) {
    alert('you did not start yet!');
    return;
  }
  
  //Stop the clock
  watch.stop();
  // create wpm and difference here:
  var wpm = Math.round(wordCount('#page1') / (watch.getSeconds() / 60));
  var difference = Math.round(100*((wpm/250)-1));
  // refer to watch's methods, and use text()
  jQuery('#timeValue').text(watch.getSeconds());
  // Make sure to replace the previous result, and give some clarity in the output
  jQuery('#wordValue').text(Math.round(wordCount('#page1')));
  jQuery('#speed').text(wpm);
  jQuery('#difference').text(difference + '%');
});

function Stopwatch(){
  var startTime, endTime, instance = this;

  this.start = function (){
    startTime = new Date();
  };

  this.stop = function (){
    endTime = new Date();
  }

  this.clear = function (){
    startTime = null;
    endTime = null;
  }

  this.getSeconds = function(){
    // return non-numerical value to indicate timer was not started
    if (!startTime){
      return null;
    }
    if (!endTime){
      return 0;
    }
    return Math.round((endTime.getTime() - startTime.getTime()) / 1000);
  }

  this.getMinutes = function(){
    return instance.getSeconds() / 60;
  }      
  this.getHours = function(){
    return instance.getSeconds() / 60 / 60;
  }    
  this.getDays = function(){
    return instance.getHours() / 24;
  }   
}

// create separate function that has little to do with the stopwatch:
function wordCount(text){
  //count words
  var words = document
    .getElementById("word").value;

  // Initialize the word counter
  var count = 0;

  // Split the words on each
  // space character 
  var split = words.split(' ');

  // Loop through the words and 
  // increase the counter when 
  // each split word is not empty
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count += 1;
    }
  }
  // Display it as output
  document.getElementById("wordcount")
    .innerHTML = count;
  console.log(count)
  return count;
}