$(document).ready(function() {

  var callback = function() {

    var $input = $("#input");
    var search = $input.val();
    $.ajax({
      type: 'GET',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&limit=10&exsentences=1&namespace=0&format=json',
      dataType: 'jsonp',
      success: function(data) {
        for (var i = 9; data[1][i] != null; --i) {
          var html = "<a href=\"" + data[3][i] + "\" target=\"_blank\"> <div class=\'w3-container w3-animate-bottom\' id=\'" + i + "\'><strong><h2>" + data[1][i] + "</h2></strong><h3>" + data[2][i] + "</h3></div></a><br>";
          $(html).prependTo("#r");

        }
      }
    });
  };

  $(document).keypress(function(e) {
    if (e.which == 13) {
      $("#r").empty();
      callback();
    }
  });

  $("#search").click(function(event) {
    callback();
  });

});
