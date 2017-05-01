function time(seconds) {
  let hours = parseInt(seconds / 3600)
  let minutes = parseInt((seconds - (hours * 3600)) / 60)
  let secs = seconds - (hours * 3600) - (minutes * 60)

  hours > 9 ? hours : hours = '0' + hours
  minutes > 9 ? minutes : minutes = '0' + minutes
  secs > 9 ? secs : secs = '0' + secs
  return hours + ':' + minutes + ':' + secs
}

module.exports = {time};
