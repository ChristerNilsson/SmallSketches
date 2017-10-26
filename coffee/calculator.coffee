a = 0
stack = []

setup = ->
	createCanvas 310,130
	a = createInput()
	a.position 8, height + 10
	a.size width-4
	bg 0
	textSize 30
	textAlign LEFT,CENTER

display = ->
	bg 0
	fc 1
	n = stack.length
	for i in range 4
		if i < n
			text stack[n-1-i], 10, height - 20 - i*30

op1 = (f) -> stack.push f stack.pop()
op2 = (f) -> stack.push f stack.pop(), stack.pop()

keyPressed = ->
	return if keyCode != ENTER
	cmds = a.value().split ' '
	a.value ''
	for cmd in cmds
		switch cmd
			when 'pi'
				stack.push PI
			when 'drp'
				stack.pop()
			when 'clr'
				stack = []
			when ''
				x = stack.pop()
				stack.push x
				stack.push x
			when 'sq'
				op1 (a) -> a*a
			when 'sin'
				op1 (a) -> sin radians a
			when '+' 
				op2 (a,b) -> b+a
			when '*'
				op2 (a,b) -> b*a
			when '-'
				op2 (a,b) -> b-a
			when '/'
				op2 (a,b) -> b/a
			else
				stack.push parseFloat cmd
	display()
