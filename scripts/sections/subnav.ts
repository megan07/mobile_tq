$("./body") {
  // Subnavigation

  $("./div[@class='mw_content']") {
    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='leftCol']//div[@class='subnav2'][div[@id='active']]", "before") {
        attributes(data-ur-set: "toggler")
        add_class("mw_subnav")
        $("./div[@id='active']") {
          attributes(data-ur-toggler-component: "button")

          $btn_text = fetch("./a/text()")
        }

        $("./div[@class='subnav3']") {
          attributes(data-ur-toggler-component: "content")
          move_here("./preceding-sibling::div[@id='active']/a", "top") {
            text() {
              append(" Home")
            }
          }

          $("./a") {
            add_class("mw_subnav_option")
            wrap_text_children("div", class: "mw_btn_text")
            insert("div", class: "sprites-arrow")
          }
        }

        $("./div[@id='active']") {
          insert("span", $btn_text, class: "mw_btn_text")
          insert("div", class: "plus_minus")
        }
    }
  }
}