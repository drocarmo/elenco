// *************
//
// Item input JS
//
// *************

var storage = window.elencoStore;
var $list = $("ul");

storage.getColorScheme(function(scheme) {
  $("body").data("scheme", scheme).addClass(scheme);
});

storage.getItems(function(data) {
  if (data.length) {
    $('li[data-default=yes]').remove();
    fillList(data);
  }
});

function fillList(data) {
  data.forEach(function(item, i) {
    var listitem = '<li>' +
      '<input class="item" data-index="'+i+'" value="' + item + '" placeholder="Add item..." />' +
      '<a class="close-toggle">' +
      '<span class="close">&times;</span>' +
      '</a>' +
      '</li>';
    $list.append(listitem);
  });
}

$("#new").on('keyup',function(e) {
  if (e.keyCode === 13) {
    var item = $(this).val();

    if (item) {
      var listitem = '<li>' +
        '<input value="' + item + '" placeholder="Add item..." />' +
        '<a class="close-toggle">' +
        '<span class="close">&times;</span>' +
        '</a>' +
        '</li>';

      $(this).val('');
      $list.append(listitem);
      $(this).focus();

      var index = 0;
      $('input.item').each(function(el){
        $(el).attr('data-index', index);
        index += 1;
      });
      storage.addItem(item, $.noop);
    }
  }
});

$(document).on('keyup', 'input.item', function(){
  var index = $(this).attr('data-index'),
      text = $(this).val();
  storage.updateItem(index, text, $.noop);
});

$(document).on('click', '.close-toggle', function() {
  $(this).parent().addClass("removed");
  var item = $(this).siblings('input').val();
  storage.removeItem(item);
});

// Color Scheme Selection

$(".colorscheme").on("click", function() {
  var el = $(this);
  var curScheme = $("body").data("scheme");
  $("body").removeClass(curScheme);
  var scheme = el.data("scheme");
  $("body").data("scheme", scheme).addClass(scheme);
  storage.setColorScheme(scheme);
});