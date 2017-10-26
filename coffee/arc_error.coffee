tree = [3, [5,6], [7,8,10,12], [4,9,14,[20,24]], [[12,13],14]]

summa = (tree) -> 
	return 0 if _.isEqual tree,[]
	return tree if _.isNumber tree 
	s = summa _.head tree
	s + summa _.tail tree 

console.log summa tree