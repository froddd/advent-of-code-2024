const run = (input, blockedPos) => {
    const maxX = input[0].length - 1
    const maxY = input.length - 1

    let y = input.indexOf(input.find(line => line.includes('^')))
    let x = input[y].indexOf('^')

    let direction = 'N'

    const visited = new Set()
    const visitedDirectional = new Set()

    let exited = false
    let validBlock = false

    while (exited === false) {
        visited.add(`${x},${y}`)
        visitedDirectional.add(`${x},${y},${direction}`)

        if (direction === 'N') {
            if (input[y - 1]?.[x] === '#' || (blockedPos === `${x},${y - 1}`)) {
                direction = 'E'
            } else {
                y -= 1
            }
        } else if (direction === 'E') {
            if (input[y][x + 1] === '#' || (blockedPos === `${x + 1},${y}`)) {
                direction = 'S'
            } else {
                x += 1
            }
        } else if (direction === 'S') {
            if (input[y + 1]?.[x] === '#' || (blockedPos === `${x},${y + 1}`)) {
                direction = 'W'
            } else {
                y += 1
            }
        } else if (direction === 'W') {
            if (input[y][x - 1] === '#' || (blockedPos === `${x - 1},${y}`)) {
                direction = 'N'
            } else {
                x -= 1
            }
        }

        if (x < 0 || x  > maxX || y < 0 || y > maxY) {
            exited = true
        }

        if (blockedPos && visitedDirectional.has(`${x},${y},${direction}`)) {
            validBlock = true
            exited = true
        }
    }

    return blockedPos ? validBlock : visited
}

const part1 = input => {
    const visited = run(input)
    return visited.size
}

const part2 = input => {
    const visited = [...run(input)]
    visited.shift()

    let validBlocks = 0

    for (const pos of visited) {
        if (run(input, pos)) {
            validBlocks += 1
        }
    }

    return validBlocks
}

module.exports = {
    part1,
    part2
}
