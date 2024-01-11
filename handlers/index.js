const { authorize } = require("./actions/authorize");
const { bootNotification } = require("./actions/boot_notification");
const { notImplemented } = require("./actions/not_implemented");
const { heartbeat } = require("./actions/heartbeat");

module.exports = {
  authorize,
  bootNotification,
  notImplemented,
  heartbeat,
};
