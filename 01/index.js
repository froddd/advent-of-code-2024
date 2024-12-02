const part1 = input => {
	const lines = input.map(line => line.split(/\s+/).map(Number))
	const list1 = lines.map(line => line[0]).sort()
	const list2 = lines.map(line => line[1]).sort()

	let totalDiff = 0
	for(let i = 0; i < list1.length; i++) {
		totalDiff += Math.abs(list2[i] - list1[i])		
	}

	return totalDiff

}

const part2 = input => {

}

module.exports = {
	part1,
	part2
}

