const processCode = code => {
    const matches = code.match(/mul\(\d{1,3},\d{1,3}\)/g)

    return matches.reduce((total, mul) => {
        const [a, b] = mul.match(/\d+/g)
        return total + (a*b)
    }, 0)
}

const part1 = input => {
    return processCode(input.join(''))
}

const part2 = input => {
    const cleanedUp = input.join('').replace(/don't\(\).*?(?=do\(\))/g, '')
    return processCode(cleanedUp)
}

module.exports = {
    part1,
    part2
}
