$("./body") {
  // News pages
  add_class("mw_news")

  $("./div[@class='mw_content']") {
    move_here("./ancestor::body//div[starts-with(@id, 'innerWrapper')]/div[starts-with(@id, 'centerCol')]/div[@id='bread']") {
      wrap_text_children("span", class: "mw_chevron") {
        text() {
          replace(/>>/, "»")
        }
      }
    }
    move_here("./ancestor::body//div[starts-with(@id, 'innerWrapper')]/div[starts-with(@id, 'centerCol')]//h1") {
      add_class("mw_title")
    }
  }
} 