const part1 = input => {
    let y = input.indexOf(input.find(line => line.includes('^')))
    let x = input[y].indexOf('^')

    let direction = 'N'

    const visited = new Set()

    let exited = false

    while (exited === false) {
        visited.add(`${x},${y}`)

        if (direction === 'N') {
            if (!input[y - 1]) {
                exited = true
            } else if (input[y - 1][x] === '#') {
                x += 1
                direction = 'E'
            } else {
                y -= 1
            }
        } else if (direction === 'E') {
            if (!input[y][x + 1]) {
                exited = true
            } else if (input[y][x + 1] === '#') {
                y += 1
                direction = 'S'
            } else {
                x += 1
            }
        } else if (direction === 'S') {
            if (!input[y + 1]) {
                exited = true
            } else if (input[y + 1][x] === '#') {
                x -= 1
                direction = 'W'
            } else {
                y += 1
            }
        } else if (direction === 'W') {
            if (!input[y][x - 1]) {
                exited = true
            } else if (input[y][x - 1] === '#') {
                y -= 1
                direction = 'N'
            } else {
                x -= 1
            }
        }
    }

    return visited.size
}

module.exports = {
    part1
}
