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

const curryAdd = (n) => {
  const f = (x) => {
    return add(n + x)
  }
  f.valueOf = () => n
  return f
}

function readNumber(number){
  const single = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  // let mil = parseInt(number / 1000000)
  let thou = parseInt(number / 1000)
  let hun = parseInt((number % 1000) / 100)
  let ten = parseInt(((number % 1000) % 100) / 10)
  let one = parseInt(((number % 1000) % 100) % 10)
  if (one && ten > 1) {
    one = '-' + single[one - 1]
  }
  if (one > 0 && ten < 1) {
      one = single[one - 1]
  }
  if (one < 1) {
    one = ''
  }
  if (ten) {
    if (ten > 1) {
      ten = tens[ten - 1]
    } else {
      ten = teens[one]
    }
  } else { ten = '' }
  if (hun) {
    hun = single[hun - 1] + ' hundred '
  } else { hun = '' }
  if (thou) {
    thou = single[thou -1] + ' thousand, '
  } else { thou = '' }
  console.log(thou + hun + ten + one)
  return thou + hun + ten + one
}

function isPalindrome(line) {
  if(line == line.toString().split('').reverse().join('')){
    return true
  }else{
    return false
  }
}

module.exports = {time, highAndLow, readNumber};
