function timeFormat(sec) {

  if (sec < 60) {
    return sec + 'sec';
  } else if (sec >= 60 && sec < 3600) {
    return Math.floor(sec / 60) + 'min ' + Math.floor(sec % 60) + 'sec';
  } else {
    return Math.floor(sec / 3600) + 'h ' + Math.floor(sec % 3600 / 60) + 'min ' + Math.floor(sec % 60) + 'sec';
  }
}

exports.timeFormat = timeFormat;