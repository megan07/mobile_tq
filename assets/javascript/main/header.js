// This js file is to manage the header buttons, navigation and the search bar
// So that the search bar won't ever be shown while the navigation is expanded
// and the navigation won't ever be expanded while the search bar is shown

x$.ready(function() {

  // If the accordion button is clicked while it's disabled, click the enabled search button
  x$(".mw_accordion_btn").on("click", function(e) {
    if(x$(e.target).attr("data-ur-state") == "disabled") {
      x$(".mw_search_btn[data-ur-state='enabled']").click();
    }
    // Else if the accordian button is clicked while it's enabled, click any enabled toggler children
    else {
      x$(".mw_topic_btn[data-ur-state='enabled']").click();
    }
  });

  // If the search button is clicked while it's disabled, click the enabled search button
  x$(".mw_search_btn").on("click", function(e) {
    if(x$(e.target).attr("data-ur-state") == "disabled") {
      x$(".mw_accordion_btn[data-ur-state='enabled']").click();
    }
  });

  x$(".mw_topic_btn").on("click", function(e) {
    if(x$(e.target).attr("data-ur-state") == "disabled") {
      var other_btns = x$(".mw_topic_btn");
      other_btns.each(function(btn) {
        if (x$(btn).attr("data-ur-state") == "enabled") {
          btn.click();
        }
      });
    }
  });
});