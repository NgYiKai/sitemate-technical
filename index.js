// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  let numberMap = {
    1: "one",
    2: "two",
    8: "eight",
    30: "half",
    45: "quarter"

  }
  // numberMap.add(1, "one")
  // numberMap.add(2, "two")
  // numberMap.add(3, "three")
  // numberMap.add(4, "four")
  // numberMap.add(5, "five")
  // numberMap.add(6, "six")
  // numberMap.add(7, "seven")
  // numberMap.add(8, "eight")
  // numberMap.add(9, "nine")
  // numberMap.add(10, "ten")
  // numberMap.add(11, "twelve")
  // numberMap.add(45, "quarter")
  // numberMap.add(30, "half")

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  let firstPartTime = time.split(':')[0]
  let secondPartTime = time.split(':')[1]

  if (secondPartTime === '00') {
    if (firstPartTime in numberMap)
      return numberMap[firstPartTime] + "o'clock"
  }

  if ( int(secondPartTime) <= 30)   {
    //past
    let string1 = ""
    let string2 = ""

    if (firstPartTime in numberMap)
      string1 = numberMap[firstPartTime] 
    if (secondPartTime in numberMap)
      string2 = numberMap[secondPartTime] 
    
    return string2 + "past" + string1
  } else {
    let string1 = ""
    let string2 = ""

    let nextHour = int(firstPartTime) +1
    if (nextHour in numberMap)
      string1 = numberMap[nextHour] 
    if (secondPartTime in numberMap)
      string2 = numberMap[secondPartTime] 

    let remainingTime = 60 - int(secondPartTime)
    
    if (remainingTime in numberMap)
      string2 = numberMap[remainingTime] 
      
    return string2 + "to" + string1

  }

}

module.exports = { convertTimeToWords };