var os = require('os');
var colors = require('colors');
var time = require('../modules/timeFormat');


function getOSinfo() {
  var type = os.type();
  if (type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var sec = os.uptime();
  var userInfo = os.userInfo();
  console.log('System:'.cyan, type);
  console.log('Release:'.yellow, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime:'.magenta, time.timeFormat(sec));
  console.log('User name:'.green, userInfo.username);
  console.log('Home dir:'.grey, userInfo.homedir);
}

exports.print = getOSinfo;