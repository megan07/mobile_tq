// This js file is to manage the agenda togglers
// So that the time togglers will be closed when the date togglers are closed
// and an open date toggler will be closed when another date toggler is opened

x$.ready(function() {

  // If the date button is clicked while it's disabled, click the enabled date togglers
  x$(".mw_date").on("click", function(e) {
    if(x$(this).attr("data-ur-state") == "disabled") {
      x$(".mw_date[data-ur-state='enabled']").click();
    }
    // Else if the date button is clicked while it's enabled, click any time toggler children
    else {
      x$(this).find(".mw_time[data-ur-state='enabled']").click();
    }
  });

  // If the time button is clicked while it's disabled, click the other enabled time buttons
  x$(".mw_time").on("click", function(e) {
    if(x$(this).attr("data-ur-state") == "disabled") {
      x$(".mw_time[data-ur-state='enabled']").click();
    }
  });
});
