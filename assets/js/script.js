
console.log('hello world');

$(document).ready(function() {
    let state = "paused";
    $('#pause').on('click', function() {
      if(state == 'paused') {
        state = "playing";
        $("#circle").attr("class", "play");
        $("#from_pause_to_play")[0].beginElement();
      } else {
        state = "paused";
        $("#circle").attr("class", "");
        $("#from_play_to_pause")[0].beginElement();
      }
    });
  });