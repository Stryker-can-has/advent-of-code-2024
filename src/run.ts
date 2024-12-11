interface IDayModule {
  default: {
    part1: () => undefined,
    part2: () => undefined
  }
}

async function run() {
  const day = process.argv.slice(2)
  if (!day) {
    console.error("A numeric argument for day is required. e.g. yarn day 2")
  }
  console.log(`Running day${day}.js`)
  const { default: { part1, part2 }}: IDayModule = await import(`./day${day}.js`)

  part1()
  part2()
}

run()