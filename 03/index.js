const part1 = input => {
    const matches = input.join('').match(/mul\(\d{1,3},\d{1,3}\)/g)

    return matches.reduce((total, mul) => {
        const [a, b] = mul.match(/\d+/g)
        return total + (a*b)
    }, 0)
}

module.exports = {
    part1
}
