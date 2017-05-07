function time(seconds) {
  let hours = parseInt(seconds / 3600)
  let minutes = parseInt((seconds - (hours * 3600)) / 60)
  let secs = seconds - (hours * 3600) - (minutes * 60)

  hours > 9 ? hours : hours = '0' + hours
  minutes > 9 ? minutes : minutes = '0' + minutes
  secs > 9 ? secs : secs = '0' + secs
  return hours + ':' + minutes + ':' + secs
}

function highAndLow(numbers){
  let array = numbers.split(' ')
	let high = parseInt(array[0])
	let low = parseInt(array[0])
	for(let i = 0; i < array.length; i++){
		parseInt(array[i]) > high ? high = parseInt(array[i]) : high = high
		parseInt(array[i]) < low ? low = parseInt(array[i]) : low = low
    }
	return [high, low].join(' ')
}

//4529.37

function readNumber(number){
  console.log(number.length)
  // let mil = parseInt(number / 1000000)
  let thou = parseInt(number / 1000)
  let hun = parseInt((number % 1000) / 100)
  let ten = parseInt(((number % 1000) % 100) / 10)
  let one = parseInt(((number % 1000) % 100) % 10)
  console.log(thou, hun, ten, one)
}

module.exports = {time, highAndLow, readNumber};
