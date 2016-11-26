visare = (grader,r,g,b,size) ->
	v = grader - 90
	sc r,g,b
	sw 3
	x1 = 0
	y1 = 0
	x2 = size*cos radians v
	y2 = size*sin radians v
	line x1,y1,x2,y2

urtavla = ->
	bg 0
	fc 0
	sc 1
	circle 0,0,100
	for i in range 0,360,6
		x1 = 90*cos radians i
		y1 = 90*sin radians i
		x2 = 100*cos radians i
		y2 = 100*sin radians i
		if i%30==0
			sw 3
		else
			sw 1
		line x1,y1,x2,y2

setup = ->
	createCanvas 200,200

draw = ->	
	translate width/2,height/2
	urtavla()
	visare 6*second(),1,1,0,100
	visare 6*minute(),1,0,0,90
	visare 30*(hour()+minute()/60),0,1,0,70