const getLists = input => {
	const lines = input.map(line => line.split(/\s+/).map(Number))
	const list1 = lines.map(line => line[0]).sort()
	const list2 = lines.map(line => line[1]).sort()

	return { list1, list2 }
}

const part1 = input => {
	const { list1, list2} = getLists(input)

	let totalDiff = 0
	for(let i = 0; i < list1.length; i++) {
		totalDiff += Math.abs(list2[i] - list1[i])		
	}

	return totalDiff
}

const part2 = input => {
	const { list1, list2} = getLists(input)

	let totalDiff = 0
	for(let i = 0; i < list1.length; i++) {
		const instances = list2.filter(x => x === list1[i]).length
		totalDiff += list1[i] * instances
	}
	
	return totalDiff
}

module.exports = {
	part1,
	part2
}

