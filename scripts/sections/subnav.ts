$("./body") {
  // Subnavigation

  $("./div[@class='mw_content']") {
    move_here("./ancestor::body//div[contains(@id,'innerWrapper')]/div[@id='leftCol']//div[@id='active']/ancestor::div[@class='subnav2']", "before") {
        attributes(data-ur-set: "toggler")
        add_class("mw_subnav")

        // If we're on a subnav2 page it will have a div with id active
        $("./div[@id='active']") {
          add_class("mw_active_parent")
          attributes(data-ur-toggler-component: "button")

          $btn_text = fetch("./a/text()")
        }

        // If we're on a subnav3 page it will just have an anchor
        $("./a") {
          wrap("div", class: "mw_active_parent") {
            attributes(data-ur-toggler-component: "button")

            $btn_text = fetch("./a/text()")
          }
        }

        $("./div[@class='subnav3']") {
          attributes(data-ur-toggler-component: "content")
          move_here("./preceding-sibling::div[contains(@class, 'mw_active_parent')]/a", "top") {
            text() {
              append(" Home")
            }
          }

          // If we're on a subnav3 page it will have a div with id active
          $("./div[@id='active']/a") {
            move_to("..", "before")

            remove("./following-sibling::div[@id='active']")
          }

          // If we're on a subnav3 page it will just have an anchor
          $("./a") {
            add_class("mw_subnav_option")
            wrap_text_children("div", class: "mw_btn_text")
            insert("div", class: "sprites-arrow")
          }
        }

        $("./div[contains(@class, 'mw_active_parent')]") {
          insert("span", $btn_text, class: "mw_btn_text")
          insert("div", class: "plus_minus")
        }
    }
  }
}