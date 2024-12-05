const part1 = input => {
    const rules = input.filter(line => line.includes('|'))
    const updates = input.filter(line => line.includes(','))

    let total = 0

    for (let update of updates) {
        const pages = update.split(',').map(Number)
        let valid = true

        updateLoop: for (let i = 1; i < pages.length; i++) {
            for (let j = i; j < pages.length; j++) {
                if (rules.includes(`${pages[j]}|${pages[i - 1]}`)) {
                    // console.log(`${update} is invalid because ${pages[i - 1]} appears before ${pages[j]}`)
                    valid = false
                    break updateLoop
                }
            }
        }

        if (valid) {
            total += pages[Math.floor(pages.length / 2)]
        }
    }

    return total
}

module.exports = {
    part1
}