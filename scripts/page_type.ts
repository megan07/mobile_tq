$page_type = ""

match($path) {
  # Home page
  with(/^\/$|^\/\?/) {
    $page_type = "home"
  }

  # Pages in the news section
  with(/news/) {
    $page_type = "news"

    with(/technology-summit/) {
      $page_type {
        append("_tts")
      }

      with(/tts-registration/) {
        $page_type {
          append("_registration")
        }
      }
      with(/agenda/) {
        $page_type {
          append("_agenda")
        }
      }
    }
  }
  else() {
    log("--> No page match in mappings.ts")
  }
}