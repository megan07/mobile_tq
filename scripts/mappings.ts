/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($page_type) {

      # Home page
      with("home") {
        log("--> Importing pages/home.ts in mappings.ts")
        @import "pages/home.ts"
      }

      log("PAGE TYPE IS ", $page_type)
      # News pages
      with(/news/) {
        @import "pages/news/news.ts"

        # TTS pages
        with(/tts_agenda/) {
          log("--> Importing pages/news/tts_agenda.ts in mappings.ts")
          @import "pages/news/tts_agenda.ts"
        }

        with(/tts_registration/) {
          log("--> Importing pages/news/tts_registration.ts in mappings.ts")
          @import "pages/news/tts_registration.ts"
        }

        with(/tts/) {
          log("--> Importing pages/news/tts.ts in mappings.ts")
          @import "pages/news/tts.ts"
        }
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import "pages/error.ts"
  }

}
