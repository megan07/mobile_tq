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
    insert("div", class: "mw_nav_container") {
      // NAV LINKS
      move_here("./ancestor::body//h2[@id='findOut' or @id='learnHow']") {
        name("div")
        $("./a") {
          add_class("mw_home_nav")
          wrap_text_children("div", class: "mw_btn_text")
          insert("div", class: "sprites-arrow")
        }
      }
      // HOME NAVIGATION TOGGLERS
      move_here("./ancestor::body//div[@id='capacity-management' or @id='performance-analysis']") {
        attributes(data-ur-set: "toggler")
        $("./h2") {
          name("div")
          add_class("mw_home_nav")
          attributes(data-ur-toggler-component: "button")

          $btn_text = fetch("./a/text()")
        }

        move_here("./div/a") {
          add_class("mw_home_subnav")
          attributes(data-ur-toggler-component: "content")
          text() {
            append(" Home")
          }
          wrap_text_children("div", class: "mw_btn_text")
          insert("div", class: "sprites-arrow")
        }

        move_here("./ul//a") {
          add_class("mw_home_subnav")
          attributes(data-ur-toggler-component: "content")
          wrap_text_children("div", class: "mw_btn_text")
          insert("div", class: "sprites-arrow")
        }
        $("./div[contains(@class, 'mw_home_nav')]") {
          insert("span", $btn_text, class: "mw_btn_text")
          insert("div", class: "plus_minus")
        }
        remove("./ul")
      }
    }
  }

  remove(".//div[@id='pageContainerHome']")
}