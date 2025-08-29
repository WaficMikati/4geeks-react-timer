export const secToTime = sec => {
  const hour = Math.trunc(sec / 3600)
  const minute = Math.trunc((sec % 3600) / 60)
  const second = Math.trunc(sec % 60)

  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
}

export const timeToSec = arr => {
  const timeArr = arrToTime(arr).split(":").map(e => Number(e))
  timeArr[0] *= 3600
  timeArr[1] *= 60
  const result = timeArr.reduce((a, c) => a + c, 0)

  return result < 360000 ? result : 359999
}

export const arrToTime = arr => {
  let result = ""
  arr.forEach((e, i) => {
    result += e
    if (i === 1 || i === 3) {
      result += ":" 
    }
  })
  return result
}

