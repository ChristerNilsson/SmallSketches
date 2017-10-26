setup = ->
	createCanvas 600,600
	
	assert ([a,b] for a,b in [10,20]), [[10,0], [20,1]]
	assert (a for a in [10,20]), [10,20]

	assert ([a,b] for a,b of {a:10,b:20}), [["a",10],["b",20]]
	assert (a for a of {a:10,b:20}), ["a","b"]

	print (a for a of range(1000))

	# of ger nyckel eller index