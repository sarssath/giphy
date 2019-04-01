// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var thing = $("#search-term").val();
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search?q=" + thing + "&rating=pg&api_key=dc6zaTOxFJmzC",
    method: "GET",
        success: function(response) {
          console.log(response.data);
          var whatever = Math.floor(Math.random()*response.data.length);
            $(".contain").html("<img src='" + response.data[whatever].images.original.url + "'>");
          setClipboard(response.data[whatever].images.original.url);
        }
  });
});

function setClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

