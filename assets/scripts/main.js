$(document).ready(function(){
$.ajax({
  url:'https://api.github.com/user/repos',
  method: "GET",
  headers: {"Authorization": "token cee5004dd4f4598e6bb43e7f49d11702a12a9f6b"}
}).then(function(api){
console.log(api);
});
});

$.ajax({
  url:'https://api.github.com/users/xfactor4/repos',
  method: "GET",
  headers: {"Authorization": "token cee5004dd4f4598e6bb43e7f49d11702a12a9f6b"}
}).then(function(api){




var url = "https://api.github.com/users/xfactor4/repos";
$.ajax(url).then(function(response){
  response.forEach(function(responses){
  console.log(responses)
  var source = $('#repo-template').html();
  var template = Handlebars.compile(source);
$("#repo-container").append(template(responses));
  })
});

});
