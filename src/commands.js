const SSH_IP = "192.168.0.100";
const SSH_USERNAME = "pi";
const SSH_PASSWORD = "Avichal";

const LOCAL_PLINK_EXE_PATH = 'C://"Program Files"//PuTTY//plink.exe';

const PYTHON_FILENAME = "l.py";
const PYTHON_FILE_DIR = "Desktop";

const OPEN_LID_COMMAND = `sudo python ${PYTHON_FILE_DIR}/${PYTHON_FILENAME} -ol LidOpen`;
const CLOSE_LID_COMMAND = `sudo python ${PYTHON_FILE_DIR}/${PYTHON_FILENAME} -il LidClose`;
const OPEN_TRAY_COMMAND = `sudo python ${PYTHON_FILE_DIR}/${PYTHON_FILENAME} -ot TrayForward`;
const CLOSE_TRAY_COMMAND = `sudo python ${PYTHON_FILE_DIR}/${PYTHON_FILENAME} -it TrayBackward`;

const OPEN_LID_COMMAND_WITH_PLINK = `${LOCAL_PLINK_EXE_PATH} -l ${SSH_USERNAME} -pw ${SSH_PASSWORD} -batch ${SSH_IP} ${OPEN_LID_COMMAND}`;
const CLOSE_LID_COMMAND_WITH_PLINK = `${LOCAL_PLINK_EXE_PATH} -l ${SSH_USERNAME} -pw ${SSH_PASSWORD} -batch ${SSH_IP} ${CLOSE_LID_COMMAND}`;
const OPEN_TRAY_COMMAND_WITH_PLINK = `${LOCAL_PLINK_EXE_PATH} -l ${SSH_USERNAME} -pw ${SSH_PASSWORD} -batch ${SSH_IP} ${OPEN_TRAY_COMMAND}`;
const CLOSE_TRAY_COMMAND_WITH_PLINK = `${LOCAL_PLINK_EXE_PATH} -l ${SSH_USERNAME} -pw ${SSH_PASSWORD} -batch ${SSH_IP} ${CLOSE_TRAY_COMMAND}`;

const SCP_FROM_RPI_COMMAND = `scp ${SSH_USERNAME}@${SSH_IP}:./2020-12-27-215109_1280x720_scrot.png ./`;

module.exports = {
  OPEN_LID_COMMAND_WITH_PLINK,
  CLOSE_LID_COMMAND_WITH_PLINK,
  OPEN_TRAY_COMMAND_WITH_PLINK,
  CLOSE_TRAY_COMMAND_WITH_PLINK,
  LOCAL_PLINK_EXE_PATH,
  SSH_IP,
  SSH_USERNAME,
  SSH_PASSWORD,
  PYTHON_FILENAME,
  PYTHON_FILE_DIR,
  OPEN_LID_COMMAND,
  CLOSE_LID_COMMAND,
  OPEN_TRAY_COMMAND,
  CLOSE_TRAY_COMMAND,
  SCP_FROM_RPI_COMMAND,
};