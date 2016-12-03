# LOC:11 frameCount push pop range rotateY rotateZ sin sphere translate
setup = -> createCanvas 1800, 1000, WEBGL
draw = ->
  rotateX mouseY * 0.005
  rotateY mouseX * 0.002 
  for j in range 5
    push()
    x = 100 * sin frameCount * 0.001 + j
    for i in range 80
      translate x, x, i * 0.1
      rotateZ frameCount * 0.002
      sphere 8
    pop()