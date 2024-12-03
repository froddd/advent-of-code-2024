const invalidReportLevel = (levels) => {
    let reportDirection = 0

    for (let i = 0; i < levels.length -1; i++) {
        const currentLevel = levels[i]
        const nextLevel = levels[i+1]

        const difference = Math.abs(currentLevel - nextLevel)

        if (difference < 1 || difference > 3) {
            return i + 1
        }

        const direction = currentLevel < nextLevel ? 1 : -1

        if (reportDirection === 0) {
            reportDirection = direction
        } else if (reportDirection !== direction) {
            return i + 1
        }
    }

    return null
}

const part1 = input => {
    let validCount = 0

    input.forEach(line => {
        const levels = line.split(/\s+/).map(Number)

        if (invalidReportLevel(levels) === null) {
            validCount += 1
        }
    })

    return validCount
}

const part2 = input => {
    let validCount = 0

    input.forEach(line => {
        const levels = line.split(/\s+/).map(Number)
        const invalidLevel = invalidReportLevel(levels)

        if (invalidLevel === null) {
            validCount += 1
        } else {
            // Try removing each level in turn
            for (let i = 0; i < levels.length; i++) {
                const fixedLevels = [...levels]
                fixedLevels.splice(i, 1)

                if (invalidReportLevel(fixedLevels) === null) {
                    validCount += 1
                    break
                }
            }
        }
    })

    return validCount
}

module.exports = {
    part1,
    part2
}
