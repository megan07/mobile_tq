// This js file is to manage the home links and togglers
// So that when one toggler is open, the other will close

x$.ready(function() {

  // If one toggler button (.homeCap) is clicked while it's disabled, click the other
  x$(".homeCap").on("click", function(e) {
    var button = x$(e.target);
    if (button.attr("data-ur-toggler-component")[0] != "button") {
      button = x$(e.target.parentNode);
    }
    if(button.attr("data-ur-state") == "disabled") {
      x$(".homeCap[data-ur-state='enabled']").click();
    }
  });
});