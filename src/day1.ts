const data = require('./day1_input')

function reformatData(data: string): [string[], string[]] {
  const leftList: string[] = []
  const rightList: string[] = []
  data.split(/\n/).forEach((row, index) => {
    const [left, right] = row.split('   ')
    if (!left || !right) {
      console.error(`Error with row ${index}: ${row}`)
      throw new Error('Invalid input, couldn\'t split row into pairs')
    }
    leftList.push(left)
    rightList.push(right)
  })

  leftList.sort()
  rightList.sort()
  return [leftList, rightList]
}

function compareLists(leftList: string[], rightList: string[]) {
  let sum = 0
  for (let i = 0; i < leftList.length; i++) {
    const leftNum = parseInt(leftList[i]!)
    const rightNum = parseInt(rightList[i]!)

    sum += Math.abs(rightNum - leftNum)
  }

  return sum
}


module.exports = {
  part1: () => {
    const totalDistance = compareLists(...reformatData(data.part1))
  
    console.log(totalDistance)
  },
  part2: () => {}
}
