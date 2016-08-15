$(document).ready(function(event) {
  // containers
  var about = $("#jumbotronAbout");
  var portfolio = $("#jumbotronPortfolio");
  var contact =$("#jumbotronContact");

  // hide invisible containers
  portfolio.hide();
  contact.hide();

  // dynamic css
  portfolio.css('padding-top', about.height()/2);
  var height = about.height();
  $("body").css('padding-top', $("#nav").height());

	// about.mouseenter(function(event) {
	// 	/* Act on the event */
 //    console.log(!firstMouseEnter);
 //    if(!firstMouseEnter) {
 //      console.log("switching");
	// 	  portfolio.height($(this).height());
 //      $(this).hide();
 //      portfolio.show();
 //    }
	// });

 //  about.mouseleave(function(event) {
 //    /* Act on the event */
 //    firstMouseEnter = false;
 //  });

	// portfolio.mouseleave(function(event) {
	// 	/* Act on the event */
 //    firstMouseEnter = false;
 //    $(this).hide();
 //    about.show();
	// });

  // menu item "about" clicked
  $("#dropdownItemAbout").click(function(event) {
    /* Act on the event */
    contact.hide();
    portfolio.hide();
    about.show();
  });

  // menu item "portfolio" clicked
  $("#dropdownItemPortfolio").click(function(event) {
    /* Act on the event */
    portfolio.height(height);
    about.hide();
    contact.hide();
    portfolio.show();
  });

  // menu item "contact" clicked
  $("#dropdownItemContact").click(function(event) {
    /* Act on the event */
    contact.height(height);
    about.hide();
    portfolio.hide();
    contact.show();
  });
});
