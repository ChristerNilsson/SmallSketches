# 3x3 sum=111 1 primes only
setup = ->
	start = millis() 
	g = []
	p = [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109]
	for i in p
		for j in p
			k = 111-i-j
			if k in p
				if i!=j and i!=k and j!=k
					g.push [i,j,k]
	for [a0,a1,a2] in g
		for [b0,b1,b2] in g
			[c0,c1,c2] = [111-a0-b0, 111-a1-b1, 111-a2-b2]
			if c0>=0 and c1>=0 and c2>=0
				if a0+b1+c2 == 111 and a2+b1+c0 == 111
					if _.uniq([a0,a1,a2,b0,b1,b2,c0,c1,c2]).length == 9 
						print a0,a1,a2,b0,b1,b2,c0,c1,c2
	print millis()-start