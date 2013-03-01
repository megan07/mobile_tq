$("./body") {
  insert_bottom("div", class: "mw_footer") {
    insert("div", class: "mw_links")
    insert("div", class: "mw_social")
    insert("div", class: "mw_copyright")
  }

  $(".//div[@id='footer-right']//a[@id='itsoblog' or @id='twitter' or @id='linkedin']") {
    add_class("mw_social_link")
    remove("./span")

    $("./self::a[@id='itsoblog']") {
      add_class("sprites-blog")
    }

    $("./self::a[@id='twitter']") {
      add_class("sprites-twitter")
    }

    $("./self::a[@id='linkedin']") {
      add_class("sprites-linkedin")
    }

    move_to("./ancestor::body/div[@class='mw_footer']//div[contains(@class, 'mw_social')]")
  }

  $(".//div[@id='footer-left']//li[not(a)]") {
    name("span")
    add_class("mw_copy")
    move_to("./ancestor::body/div[@class='mw_footer']//div[contains(@class, 'mw_copyright')]")
  }

  $(".//div[@id='footer-left']//a") {
    add_class("mw_footer_link")
    move_to("./ancestor::body/div[@class='mw_footer']/div[@class='mw_links']")
  }

  remove(".//div[contains(@id, 'footerContainer')]")
}