const part1 = input => {
    let validCount = 0

    input.forEach(line => {
        const levels = line.split(/\s+/).map(Number)
        let valid = true
        let reportDirection = 0

        while (valid && levels.length > 1) {
            let currentLevel = levels.shift()
            const nextLevel = levels[0]
            const difference = Math.abs(currentLevel - nextLevel)

            if (difference < 1 || difference > 3) {
                valid = false
                break
            }

            const direction = currentLevel < nextLevel ? 1 : -1

            if (reportDirection === 0) {
                reportDirection = direction
            } else if (reportDirection !== direction) {
                valid = false
                break
            }
        }

        if (valid) {
            validCount += 1
        }
    })

    return validCount
}

module.exports = {
    part1
}
