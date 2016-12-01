

setup = ->
	createCanvas 1000,1000

draw = ->
	bg 0
	translate width/2, height/2
	x1 = -5
	y1 = 0

	x2 = 0
	y2 = -5

	start = - HALF_PI + atan2 x1,y1
	stopp = - HALF_PI + atan2 x2,y2
	draw_arc start,stopp,9,1,1,1
	draw_arc start,stopp,5,1,0,0

draw_arc = (start,stopp,w,r,g,b) ->
	fc()
	sc r,g,b
	sw w
	arc 0,0,500,500, stopp, start