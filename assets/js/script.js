"use strict";

const video = document.querySelector("#myVideo");
const play = document.querySelector(".form__video-play");
const btn = document.querySelector("#btn");

let state = "paused";

const playing = function () {
  $(document).ready(function () {
    if (state == "paused") {
      state = "playing";
      $("#circle").attr("class", "");
      $("#from_pause_to_play")[0].beginElement();
    } else {
      state = "paused";
      $("#circle").attr("class", "play");
      $("#from_play_to_pause")[0].beginElement();
    }
  });
};

$(document).ready(function () {
  $("#pause").on("click", function () {
    if (state === "paused") {
      state = "playing";
      video.pause();
      $("#circle").attr("class", "");
      $("#from_pause_to_play")[0].beginElement();
    } else {
      state = "paused";
      video.play();
      $("#circle").attr("class", "play");
      $("#from_play_to_pause")[0].beginElement();
    }
  });
});

playing();

btn.addEventListener("click", function (e) {
  e.preventDefault();
});
