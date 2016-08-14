$(document).ready(function(event) {
  var firstMouseEnter = true;
  var jumbotron1 = $("#jumbotron1");
  var jumbotron2 = $("#jumbotron2");
  jumbotron2.hide();
  jumbotron2.css('padding-top', jumbotron1.height()/2);
	jumbotron1.mouseenter(function(event) {
		/* Act on the event */
    console.log(!firstMouseEnter);
    if(!firstMouseEnter) {
      console.log("switching");
		  jumbotron2.height($(this).height());
      $(this).hide();
      jumbotron2.show();
    }
	});

  jumbotron1.mouseleave(function(event) {
    /* Act on the event */
    firstMouseEnter = false;
  });

	jumbotron2.mouseleave(function(event) {
		/* Act on the event */
    firstMouseEnter = false;
    $(this).hide();
    jumbotron1.show();
	});
});
