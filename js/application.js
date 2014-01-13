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

$(".new input").bind('keyup',function(e) {
  if (e.keyCode === '13') {

    var item = $(this).val();

    if(item !== ""){
      var listitem = '<li>'
        + '<input value="' + item + '" placeholder="Add item..." />'
        + '<a class="close-toggle">'
        + '<span class="close">&times;</span>'
        + '</a>'
        + '</li>'

      $(this).val('').parent().after(listitem);
      $(this).focus();

      var index = 0;
      $('input.item').each(function(el){
	    $(el).attr('data-index', index);
		index++;
	  });
      storage.addItem(item, function(e){ });
    }
  }
});

$(document).on('keyup', 'input.item', function(){
  var index = $(this).attr('data-index'),
      text = $(this).val();
  storage.updateItem(index, text, function(){ });
});

$(document).on('click', '.close-toggle', function(){
  $(this).parent().addClass("removed");
  var item = $(this).siblings('input').val();
  storage.removeItem(item);
});

function fillList (data) {
	data.forEach(function(item, i){
	  var listitem = '<li>'
		  + '<input class="item" data-index="'+i+'" value="' + item + '" placeholder="Add item..." />'
		  + '<a class="close-toggle">'
		  + '<span class="close">&times;</span>'
		  + '</a>'
		  + '</li>';
	  $list.append(listitem);
	});
};
