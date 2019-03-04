$(document).ready(function(){
  var activeMenuCount = false;
  jQuery13('#sidebar-left ul.accordion .slide').each(function(i) {
    if ($(this).hasClass('active-trail')) {
      activeMenuCount = i;
      return false;
    }
  });
  jQuery13('#sidebar-left ul.accordion').accordion({
		active: activeMenuCount,
		autoHeight: false,
		header: ".opener",
		collapsible: true,
		event: "click"
	});

});