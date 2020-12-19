// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const execute = require("./util");
const {
  OPEN_LID_BUTTON,
  CLOSE_LID_BUTTON,
  OPEN_TRAY_BUTTON,
  CLOSE_TRAY_BUTTON,
  OPEN_LID_GIF,
  CLOSE_LID_GIF,
  OPEN_TRAY_GIF,
  CLOSE_TRAY_GIF,
} = require("./elements");
const {
  OPEN_LID_COMMAND,
  CLOSE_LID_COMMAND,
  OPEN_TRAY_COMMAND,
  CLOSE_TRAY_COMMAND,
} = require("./commands");

OPEN_LID_BUTTON.addEventListener("click", (_) => {
  OPEN_LID_GIF.style.display = "inline-block";

  execute(OPEN_LID_COMMAND);
});

CLOSE_LID_BUTTON.addEventListener("click", (_) => {
  CLOSE_LID_GIF.style.display = "inline-block";

  execute(CLOSE_LID_COMMAND);
});

OPEN_TRAY_BUTTON.addEventListener("click", (_) => {
  OPEN_TRAY_GIF.style.display = "inline-block";

  execute(OPEN_TRAY_COMMAND);
});

CLOSE_TRAY_BUTTON.addEventListener("click", (_) => {
  CLOSE_TRAY_GIF.style.display = "inline-block";

  execute(CLOSE_TRAY_COMMAND);
});
