const part1 = input => {
    const maxY = input.length -1
    const maxX = input[0].length -1
    const word = 'XMAS'

    const directions = {
        N: { x: 0, y: -1 },
        NE: { x: 1, y: -1 },
        E: { x: 1, y: 0 },
        SE: { x: 1, y: 1 },
        S: { x: 0, y: 1 },
        SW: { x: -1, y: 1 },
        W: { x: -1, y: 0 },
        NW: { x: -1, y: -1 }
    }

    let count = 0
    
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === 'X') {
                for (let direction in directions) {
                    const endX = directions[direction].x * (word.length - 1) + x
                    const endY = directions[direction].y * (word.length - 1) + y

                    if (endX >= 0 && endX <= maxX && endY >= 0 && endY <= maxY) {
                        let startX = x
                        let startY = y

                        if (word.split('').every(letter => {
                            const valid = input[startY][startX] === letter

                            startX += directions[direction].x
                            startY += directions[direction].y

                            return valid
                        })) {
                            count += 1
                        }
                    }
                }
            }
        }
    }

    return count
}

const part2 = input => {
    const maxY = input.length -1
    const maxX = input[0].length -1
    let count = 0

    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (y > 0 && y < maxY && x > 0 && x < maxX && input[y][x] === 'A') {
                if (
                    ((input[y-1][x-1] === 'M' && input[y+1][x+1] === 'S') || (input[y-1][x-1] === 'S' && input[y+1][x+1] === 'M')) &&
                    ((input[y+1][x-1] === 'M' && input[y-1][x+1] === 'S') || (input[y+1][x-1] === 'S' && input[y-1][x+1] === 'M'))
                ) {
                    count += 1
                }
            }
        }
    }

    return count
}

module.exports = {
    part1,
    part2
}
