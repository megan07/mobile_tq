$("./body") {
  // TTS Register Page
  add_class("mw_tts_register")

  $("./div[@class='mw_content']") {
    // Special Needs box - lets put this at the top so that its notable
    move_here("./ancestor::body//div[@id='pageContentWrapper']/div") {
      remove("./@style")
      add_class("mw_special_needs")
    }

    move_here("./ancestor::body//div[@id='pageContentWrapper']/form") {
      $("./table[1]//td[1]") {
        name("div")
        add_class("mw_registration_info")
        move_to("./ancestor::table", "before")
      }

      $("./table[2]/tr") {
        name("div")
        add_class("mw_form_row")

        // The first row of this table has a table with one row of information we want
        $(".//table//tr[1]//strong") {
          add_class("mw_form_label")
          wrap("div", class: "mw_form_info") {
            move_here("./ancestor::table/following-sibling::strong")
            move_to("./ancestor::body//div[contains(@class, 'mw_registration_info')]", "after")
          }
        }

        remove(".//table/ancestor::div[contains(@class, 'mw_form_row')]")

        $("./td[1]") {
          name("div")
          add_class("mw_label")
          remove("./@valign | ./@align")

          inner() {
            replace(/<br>/, " ")
          }

          $("./span") {
            remove("./@style")
            add_class("mw_presubmit")
            move_to("./ancestor::div[contains(@class, 'mw_form_row')]", "bottom")
          }

          $("./self::div[input]") {
            attributes(class: "mw_hidden_info")
            move_to("./ancestor::form", "bottom")
          }
        }

        $("./td") {
          name("div")
          add_class("mw_input")
          remove("./br")

          $("./self::div[input[@type='radio']]") {
            wrap_text_children("div", class: "mw_radio_labels") {
              text() {
                replace(/\s*$/, "")
              }

              remove("./self::div[text()='']")
            }
            $("./input") {
              $value = fetch("./@value")
              move_here("./following-sibling::div[text() = "+$value+"]", "after")
              log("//div[text() = "+$value+"]")
            }
          }

          $("./textarea") {
            remove("./@rows | ./@cols")
          }

          $("./span") {
            remove("./@style")
            add_class("mw_side_note")

            inner() {
              replace(/<br>/, " ")
            }

            move_to("./ancestor::div[contains(@class, 'mw_form_row')]", "bottom")
          }

          inner() {
            replace(/ /, "")
          }
        }

        move_to("./ancestor::table", "before")
      }

      remove("./table")
    }
  }

  remove(".//div[@id='pageContainer']")
} 