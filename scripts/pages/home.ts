$("./body") {
  // HOME PAGE
  add_class("mw_home")

  $("./div[@class='mw_content']") {

    // CAROUSEL
    insert_before("div", class: "mw_carousel", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-vertical-scroll: "disabled", data-ur-touch: "disabled", data-ur-center: "enabled", data-ur-fill: "1", data-ur-autoscroll: "enabled") {
      insert("div", class: "mw_scroll_container", data-ur-carousel-component: "scroll_container") {
        move_here("./ancestor::body//ul[@id='slideshow']//a") {
          add_class("mw_item")
          attributes(data-ur-carousel-component: "item")
        }
      }
      insert("div", data-ur-carousel-component: "dots")
    }

    // HOME NAVIGATION
    move_here("./ancestor::body//h2[@id='learnHow']") {
      name("div")
      add_class("mw_home_nav")
    }
    move_here("./ancestor::body//h2[@id='findOut']") {
      name("div")
      add_class("mw_home_nav")
    }

    // HOME NAVIGATION TOGGLERS
    move_here("./ancestor::body//div[@id='capacity-management' or @id='performance-analysis']") {
      attributes(data-ur-set: "toggler")
      add_class("mw_home_nav")
      $("./h2") {
        name("div")
        add_class("mw_button")
        attributes(data-ur-toggler-component: "button")

        $btn_text = fetch("./a/text()")
      }

      move_here("./div/a") {
        add_class("mw_home_subnav")
        attributes(data-ur-toggler-component: "content")
        text() {
          append(" Home")
        }
      }

      move_here("./ul//a") {
        add_class("mw_home_subnav")
        attributes(data-ur-toggler-component: "content")
      }
      $("./div[contains(@class, 'mw_button')]") {
        text($btn_text)
      }
      remove("./ul")
    }
    move_here("./ancestor::body//div[contains(@id, 'content-ad')]/a") {
      add_class("mw_home_ad")
    }
  }

  remove(".//div[@id='pageContainerHome']")
}