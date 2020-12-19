const exec = require("child_process").exec;

const {
  OPEN_LID_GIF,
  CLOSE_LID_GIF,
  OPEN_TRAY_GIF,
  CLOSE_TRAY_GIF,
  STDOUT_TEXT_PARAGRAPH,
  ERROR_TEXT_PARAGRAPH,
  STDERR_TEXT_PARAGRAPH,
} = require("./elements");

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

module.exports = execute;
