import $ from 'jquery';
import 'bootstrap';
import { Marvel } from "./marvel.js";

$(document).ready(function() {
  let showTime;
  $('#heroSheet').click(function() {
    let character = $('heroName').val();
    // $('#heroName').val("");
    showtime = new Marvel();
    showTime.call(character).then(function(response) {
      $('#output').text(`${response.results[0].description}`)
    });
  });
});
