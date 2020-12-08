// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const exec = require("child_process").exec;

const DEFAULT_LED_IP = "192.168.1.22";

const DEFAULT_PLINK_EXE_PATH = 'C://"Program Files"//PuTTY//plink.exe';

const OPEN_LID_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -ol LidOpen`;
const CLOSE_LID_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -il LidClose`;
const OPEN_TRAY_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -ot TrayForward`;
const CLOSE_TRAY_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -it TrayBackward`;

const OPEN_LID_BUTTON = document.getElementById("open-lid-button");
const CLOSE_LID_BUTTON = document.getElementById("close-lid-button");
const OPEN_TRAY_BUTTON = document.getElementById("open-tray-button");
const CLOSE_TRAY_BUTTON = document.getElementById("close-tray-button");
const STDOUT_TEXT_PARAGRAPH = document.getElementById("stdout-text");
const ERROR_TEXT_PARAGRAPH = document.getElementById("error-text");
const STDERR_TEXT_PARAGRAPH = document.getElementById("stderr-text");
const OPEN_LID_GIF = document.getElementById("open-lid-gif");
const CLOSE_LID_GIF = document.getElementById("close-lid-gif");
const OPEN_TRAY_GIF = document.getElementById("open-tray-gif");
const CLOSE_TRAY_GIF = document.getElementById("close-tray-gif");

const execute = (command) => {
  exec(command, (error, stdout, stderr) => {
    OPEN_LID_GIF.style.display = "none";
    CLOSE_LID_GIF.style.display = "none";
    OPEN_TRAY_GIF.style.display = "none";
    CLOSE_TRAY_GIF.style.display = "none";

    STDOUT_TEXT_PARAGRAPH.innerText = stdout;
    ERROR_TEXT_PARAGRAPH.innerText = error;
    STDERR_TEXT_PARAGRAPH.innerText = stderr;
  });
};

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
