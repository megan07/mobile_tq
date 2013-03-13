$("./body") {
  // TTS Agenda Page
  add_class("mw_tts_agenda")

  $("./div[@class='mw_content']") {
    move_here("./ancestor::body//div[@id='pageContentWrapper']/table/tr") {
      name("div")
      $index = index()
      $("./self::div[td[2]]") {
        add_class("mw_time_block")
        attributes(data-ur-set: "toggler", data-ur-id: "time_"+$index)
        $("./td[1]") {
          name("div")
          remove("./@valign")
          add_class("mw_time")
          attributes(data-ur-toggler-component: "button", data-ur-id: "time_"+$index)
        }

        $("./td") {
          name("div")
          remove("./@valign")
          remove(".//br")
          add_class("mw_events")

          attributes(data-ur-toggler-component: "content", data-ur-id: "time_"+$index)

          $("./strong") {
            wrap("div", class: "mw_event_title") {
              move_here("./following-sibling::em[1]", "after") {
                name("div")
                add_class("mw_event_speaker")
              }
            }
          }

          wrap_text_children("span") {
            remove()
          }
        }
      }

      $("./td/strong") {
        wrap("div", class: "mw_date", data-ur-toggler-component: "button") {
          move_to("./ancestor::div[1]") {
            add_class("mw_day_wrap")
            attributes(data-ur-set: "toggler", data-ur-id: "date_"+$index)
            remove("./td")
          }
        }
      }
    }

    $(".//div[contains(@class, 'mw_time_block')]") {
      wrap("div", class: "mw_time_wrap", data-ur-toggler-component: "content") {
        move_to("./preceding-sibling::div[contains(@class, 'mw_day_wrap')][1]") {
          $data_id = fetch("./@data-ur-id")

          $("./div") {
            attributes(data-ur-id: $data_id)
          }
        }
      }
    }

    remove("./div[not(@class)]")
  }

  remove(".//div[@id='pageContainer']")
} 