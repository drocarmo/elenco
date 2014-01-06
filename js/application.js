// *************
//
// Item input JS
//
// *************

$html = $("html");
$list = $("ul");

$(".new input").bind('blur keyup',function(e) {
  if (e.type == 'blur' || e.keyCode == '13') {

    var item = $(this).val();

    if(item !== ""){
      var listitem = '<li>'
        + '<input value="' + item + '" placeholder="Add item..." />'
        + '<a class="check-toggle">'
        + '<span class="close">&times;</span>'
        + '</a>'
        + '</li>'

      $(this).val('').parent().after(listitem);
      $(this).focus();
    }
  }
});

$(document).on('click', '.check-toggle', function(){
  $(this).parent().addClass("removed");
});