const exec = require("child_process").exec;
const Client = require("ssh2").Client;

const {
  OPEN_LID_WITH_PLINK_GIF,
  CLOSE_LID_WITH_PLINK_GIF,
  OPEN_TRAY_WITH_PLINK_GIF,
  CLOSE_TRAY_WITH_PLINK_GIF,
  STDOUT_TEXT_PARAGRAPH,
  ERROR_TEXT_PARAGRAPH,
  STDERR_TEXT_PARAGRAPH,
  OPEN_LID_GIF,
  CLOSE_LID_GIF,
  OPEN_TRAY_GIF,
  CLOSE_TRAY_GIF,
  ON_CLOSE_TEXT_PARAGRAPH,
  ON_DATA_TEXT_PARAGRAPH,
  ON_ERROR_TEXT_PARAGRAPH,
} = require("./elements");
const { SSH_IP, SSH_USERNAME, SSH_PASSWORD } = require("./commands");

const hideLoader = () => {
  OPEN_LID_WITH_PLINK_GIF.style.display = "none";
  CLOSE_LID_WITH_PLINK_GIF.style.display = "none";
  OPEN_TRAY_WITH_PLINK_GIF.style.display = "none";
  CLOSE_TRAY_WITH_PLINK_GIF.style.display = "none";

  OPEN_LID_GIF.style.display = "none";
  CLOSE_LID_GIF.style.display = "none";
  OPEN_TRAY_GIF.style.display = "none";
  CLOSE_TRAY_GIF.style.display = "none";
};

const resetCommandOutputs = () => {
  STDOUT_TEXT_PARAGRAPH.innerText = "";
  ERROR_TEXT_PARAGRAPH.innerText = "";
  STDERR_TEXT_PARAGRAPH.innerText = "";

  ON_CLOSE_TEXT_PARAGRAPH.innerText = "";
  ON_DATA_TEXT_PARAGRAPH.innerText = "";
  ON_ERROR_TEXT_PARAGRAPH.innerText = "";
};

const execute = (command) => {
  resetCommandOutputs();

  exec(command, (error, stdout, stderr) => {
    hideLoader();

    STDOUT_TEXT_PARAGRAPH.innerText = stdout;
    ERROR_TEXT_PARAGRAPH.innerText = error;
    STDERR_TEXT_PARAGRAPH.innerText = stderr;
  });
};

const sendCommandToHardware = (command) => {
  resetCommandOutputs();

  const conn = new Client();
  conn
    .on("ready", () => {
      conn.exec(command, (err, stream) => {
        if (err) {
          ON_ERROR_TEXT_PARAGRAPH.innerText += `${err.toString()}\n`;
          throw err;
        }

        stream
          .on("close", (code) => {
            conn.end();
            ON_CLOSE_TEXT_PARAGRAPH.innerText = code.toString();
            hideLoader();
          })
          .on("data", (data) => {
            ON_DATA_TEXT_PARAGRAPH.innerText += `${data.toString()}\n`;
          })
          .stderr.on("data", (data) => {
            ON_ERROR_TEXT_PARAGRAPH.innerText += `${data.toString()}\n`;
          });
      });
    })
    .connect({
      host: SSH_IP,
      port: 22,
      username: SSH_USERNAME,
      password: SSH_PASSWORD,
    });
};

module.exports = { execute, sendCommandToHardware };
