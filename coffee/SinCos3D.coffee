# LOC:12 frameCount push pop range rotateZ sin sphere translate
setup = -> createCanvas 1800, 1000, WEBGL
draw = ->
  t = frameCount /100 
  rotateX mouseY * 0.005
  rotateY mouseX * 0.002 
  for j in range 5
    push()
    x = 100 * sin t * 0.001 + j
    for i in range 80
      translate x, x, i * 0.1
      rotateZ t * 0.002
      sphere 8
    pop()
