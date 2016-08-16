$(document).ready(function(event) {
  // containers/elements
  var about = $("#jumbotronAbout");
  var portfolio = $("#jumbotronPortfolio");
  var contact = $("#jumbotronContact");
  var dropdownText = $("#dropdownText");
  var form = $("contactForm");
  var formSubmit = $("#formSubmit");

  // hide invisible containers
  portfolio.hide();
  contact.hide();

  // menu item "about" clicked
  $("#dropdownItemAbout").click(function(event) {
    /* Act on the event */
    // contact.hide();
    // portfolio.hide();
    dropdownText.html("<strong>ABOUT</strong>");
    $("div:visible.main_content_area").fadeOut(300)
    about.fadeIn(300);
  });

  // menu item "portfolio" clicked
  $("#dropdownItemPortfolio").click(function(event) {
    /* Act on the event */
    // about.hide();
    // contact.hide();
    dropdownText.html("<strong>PORTFOLIO</strong>");
    $("div:visible.main_content_area").fadeOut(300)
    portfolio.fadeIn(300);
  });

  // menu item "contact" clicked
  $("#dropdownItemContact").click(function(event) {
    /* Act on the event */
    // about.hide();
    // portfolio.hide();
    dropdownText.html("<strong>CONTACT</strong>");
    $("div:visible.main_content_area").fadeOut(300)
    contact.fadeIn(300);
  });

  // form handling...collect data and POST to php script
  formSubmit.on("click", function(event) {
    event.preventDefault();
    /* Act on the event */
    // Create request object for php script
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "contact_form_send.php", true);

    // Set header info
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Callback function
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          alert(xmlhttp.responseText);
      }
    };

    xmlhttp.send(form.serialize());
  });
});
