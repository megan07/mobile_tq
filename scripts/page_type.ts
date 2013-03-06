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
      $page_type = "tts"
    }
  }
  else() {
    log("--> No page match in mappings.ts")
  }
}