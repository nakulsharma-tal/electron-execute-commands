// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const exec = require("child_process").exec;

const LED_ON_COMMAND =
  "plink.exe -l pi -pw Avichal -batch 192.168.1.22 sudo python Desktop/l.py -o On";
const LED_OFF_COMMAND =
  "plink.exe -l pi -pw Avichal -batch 192.168.1.22 sudo python Desktop/l.py -i Off";

const LED_ON_BUTTON = document.getElementById("led-on-button");
const LED_OFF_BUTTON = document.getElementById("led-off-button");
const STDOUT_TEXT_PARAGRAPH = document.getElementById("stdout-text");
const ERROR_TEXT_PARAGRAPH = document.getElementById("error-text");
const STDERR_TEXT_PARAGRAPH = document.getElementById("stderr-text");

const execute = (command) => {
  exec(command, (error, stdout, stderr) => {
    STDOUT_TEXT_PARAGRAPH.innerText = stdout;
    ERROR_TEXT_PARAGRAPH.innerText = error;
    STDERR_TEXT_PARAGRAPH.innerText = stderr;
  });
};

LED_ON_BUTTON.addEventListener("click", (_) => {
  execute(LED_ON_COMMAND);
});

LED_OFF_BUTTON.addEventListener("click", (_) => {
  execute(LED_OFF_COMMAND);
});
