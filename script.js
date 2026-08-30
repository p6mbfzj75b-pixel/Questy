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

/* =========================
   THEMES
========================= */

function changeTheme(theme) {

  document.body.className = "";

  document.body.classList.add(
    "theme-" + theme
  );

  localStorage.setItem(
    "questModeTheme",
    theme
  );

}


const themeSelect =
  document.getElementById("themeSelect");


if (themeSelect) {

  themeSelect.addEventListener(
    "change",
    function() {

      changeTheme(
        this.value
      );

    }
  );

}


const savedTheme =
  localStorage.getItem(
    "questModeTheme"
  );


if (savedTheme) {

  changeTheme(savedTheme);

  if (themeSelect) {

    themeSelect.value =
      savedTheme;

  }

} else {

  changeTheme("dark");

}
