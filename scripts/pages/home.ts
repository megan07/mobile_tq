$("./body") {
  add_class("mw_home")
  $("./div[@class='mw_header_wrap']") {
    insert_after("div", class: "mw_content") {
      insert("div", class: "mw_carousel", data-ur-set: "carousel", data-ur-carousel-component: "view_container", data-ur-vertical-scroll: "disabled", data-ur-touch: "disabled", data-ur-center: "enabled", data-ur-fill: "1", data-ur-autoscroll: "enabled") {
        insert("div", class: "mw_scroll_container", data-ur-carousel-component: "scroll_container") {
          move_here("./ancestor::body//ul[@id='slideshow']//a") {
            add_class("mw_item")
            attributes(data-ur-carousel-component: "item")
          }
        }
        insert("div", data-ur-carousel-component: "dots")
      }
    }
  }

  remove(".//div[@id='customers']")
}