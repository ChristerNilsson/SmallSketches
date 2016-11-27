flakes = []
stars = []
dx = 0.86 # cos(30)
dy = 0.5 # sin(30)

class Star

	constructor : (@x,@y,@size,@c,@start) ->

	draw : ->
		c = (1+sin(@start + frameCount*0.01)) 
		fc c,c,0
		sc()
		circle @x,@y,@size

class Flake 

	constructor : (@x,@y,@size,@gray,@vx,@vy,@va) ->
		@a = 0

	draw : ->
		fc @gray,@gray,@gray,0.9
		sc()
		sw @size*0.1
		push()
		translate @x,@y	
		rd @a
		@a += @va
		x = dx*@size
		y = dy*@size
		triangle x,y, -x,y, 0,-@size
		triangle x,-y, -x,-y, 0,@size
		pop()
		@y += @vy
		@y = -100 if @y>height+@size
		@x += random(-0.2,0.2)

setup = ->
	createCanvas 1920,1200
	for i in range 10
		size = lerp 1,2,i
		gray = lerp 0.1,0.2,i
		vx = lerp -0.2,0.2,i
		vy = lerp 1,2,i
		antal = lerp 10,9,i
		for j in range antal*antal
			flakes.push new Flake random(width),random(height),size*size,gray,vx,vy,random(-0.5,0.5)
	for i in range 100
		stars.push new Star random(width),random(height),random(1,2),random(1),random(10)

draw = ->	
	bg 0,0,0.05
	for star in stars
		star.draw()
	for flake in flakes
		flake.draw()
