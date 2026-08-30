if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker.register("./sw.js")
      .then(() => {

        console.log("QuestMode Service Worker aktiviert.");

      })
      .catch(error => {

        console.error(
          "Service Worker Fehler:",
          error
        );

      });

  });

}
