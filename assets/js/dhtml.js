$(document).ready(function(event) {
  // containers
  var about = $("#jumbotronAbout");
  var portfolio = $("#jumbotronPortfolio");
  var contact =$("#jumbotronContact");

  // hide invisible containers
  portfolio.hide();
  contact.hide();

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
    about.hide();
    contact.hide();
    portfolio.show();
  });

  // menu item "contact" clicked
  $("#dropdownItemContact").click(function(event) {
    /* Act on the event */
    about.hide();
    portfolio.hide();
    contact.show();
  });
});
