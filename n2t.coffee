Nand = (a,b) -> 1 - a*b
assert 1, Nand 0,0
assert 1, Nand 0,1
assert 1, Nand 1,0
assert 0, Nand 1,1

Not = (xin) -> Nand xin,xin
assert 1, Not 0
assert 0, Not 1

And = (a,b) -> 
	x = Nand a,b 
	out = Not x 
assert 0, And 0,0
assert 0, And 0,1
assert 0, And 1,0
assert 1, And 1,1



print "Ready"
