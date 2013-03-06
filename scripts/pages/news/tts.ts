$("./body") {
  // TTS Home Page
  add_class("mw_tts_home")

  $("./div[@class='mw_content']") {
    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='centerCol']/div[@id='bread']") {
      wrap_text_children("span", class: "mw_chevron") {
        text() {
          replace(/>>/, "»")
        }
      }
    }
    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='centerCol']//h1") {
      add_class("mw_title")
    }

    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='centerCol']//td[@class='ttsMtxt']") {
      name("div")
      add_class("mw_tts_info")

      wrap_text_children("div", class: "mw_tts_line") {
        text() {
          replace(/\n/, "")
          replace(/			/, "")
          replace(/            /, "")
        }
      }

      $("./a") {
      	add_class("mw_register")
      	text("Register")
      }

      remove("./@valign")
      remove("./div[text()=' ' or text()='']")
      remove(".//br")
      remove(".//img")
    }

    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='centerCol']//iframe") {
    	attributes(height: "", width: "")
    	wrap("div", class: "mw_video")
    }

    move_here("./ancestor::body//div[@id='innerWrapper']/div[@id='centerCol']//tr[3]/td") {
    	name("div")
    	add_class("mw_what_is_tts")
    	attributes(colspan: "")

    	remove(".//@style")
    	remove(".//br")
    }
  }

  remove(".//div[@id='pageContainer']")
} 