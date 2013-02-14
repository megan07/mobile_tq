$("./body") {
  insert_top("div", class: "mw_header_wrap") {
    attributes(data-ur-set: "toggler", data-ur-id: "accordion")
    insert("div", class: "mw_header") {
      attributes(data-ur-set: "toggler", data-ur-id: "search")
      insert("div", class: "mw_logo")
      insert("div", class: "mw_header_btns mw_flex_box") {
        insert("div", "Search", class: "mw_search_btn mw_flex_box_item_1") {
          attributes(data-ur-toggler-component: "button", data-ur-id: "search")
        }
        insert("div", "Menu", class: "mw_accordion_btn mw_flex_box_item_1") {
          attributes(data-ur-toggler-component: "button", data-ur-id: "accordion")
        }
      }
    }
    insert("div", class: "mw_accordion_nav") {
      attributes(data-ur-toggler-component: "content", data-ur-id: "accordion")
    }
  }

  $(".//div[@id='header']") {
    $("./div[@id='logo']") {
      move_to("./ancestor::body//div[@class='mw_header']/div[@class='mw_logo']")
    }
    $("./div[@class='nav']//li[contains(@class, 'top-li')]") {
      name("div")
      attributes(data-ur-set: "toggler")
      $("./a") {
        wrap("div", class: "mw_subcat", data-ur-toggler-component: "content")
        $topic = fetch("./text()")
        text() {
          append(" Home")
        }
      }
      move_here(".//li[a]") {
        name("div")
        add_class("mw_subcat")
        attributes(data-ur-toggler-component: "content")
        $("./a[span]") {
          wrap_text_children("span", class: "mw_desc")
          remove("./span[@class='mw_desc']")
        }
      }
      remove("./ul")
      insert_top("div", $topic, class: "mw_topic_btn") {
        attributes(data-ur-toggler-component: "button")
      }
      move_to("./ancestor::body/div/div[@class='mw_accordion_nav']")
    }
    $(".//form[@id='search']") {
      wrap("div", class: "mw_search_wrap", data-ur-toggler-component: "content", data-ur-id: "search") {
        move_to("./ancestor::body//div[@class='mw_accordion_nav']", "after")
      }
    }
  }
}

