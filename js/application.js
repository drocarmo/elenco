// *************
//
// Item input JS
//
// *************

var storage = window.elencoStore;

storage.getItems(function(data){
  if (data.length) {
    $('li[data-default=yes]').remove();
    fillList(data);
  };
});

$html = $("html");
$list = $("ul");

$(".new input").bind('blur keyup',function(e) {
  if (e.type == 'blur' || e.keyCode == '13') {

    var item = $(this).val();

    if(item !== ""){
      var listitem = '<li>'
        + '<input value="' + item + '" placeholder="Add item..." />'
        + '<a class="task">'
        + '<span class="close">&times;</span>'
        + '</a>'
        + '</li>'

      $(this).val('').parent().after(listitem);
      $(this).focus();
      storage.addItem(item, function(e){

      });
    }
  }
});

$(document).on('click', '.task', function(){
  $(this).parent().addClass("removed");
  var item = $(this).siblings('input').val();
  storage.removeItem(item);
});

function fillList (data) {
  data.forEach(function(item){
    var listitem = '<li>'
      + '<input value="' + item + '" placeholder="Add item..." />'
      + '<a class="task">'
      + '<span class="close">&times;</span>'
      + '</a>'
      + '</li>';
    $list.append(listitem);
  });
};