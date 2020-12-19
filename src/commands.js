const DEFAULT_LED_IP = "192.168.1.22";

const DEFAULT_PLINK_EXE_PATH = 'C://"Program Files"//PuTTY//plink.exe';

const OPEN_LID_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -ol LidOpen`;
const CLOSE_LID_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -il LidClose`;
const OPEN_TRAY_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -ot TrayForward`;
const CLOSE_TRAY_COMMAND = `${DEFAULT_PLINK_EXE_PATH} -l pi -pw Avichal -batch ${DEFAULT_LED_IP} sudo python Desktop/l.py -it TrayBackward`;

module.exports = {
  OPEN_LID_COMMAND,
  CLOSE_LID_COMMAND,
  OPEN_TRAY_COMMAND,
  CLOSE_TRAY_COMMAND,
};
