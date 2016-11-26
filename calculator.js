// Generated by CoffeeScript 1.11.1
var a, display, keyPressed, op1, op2, setup, stack;

a = 0;

stack = [];

setup = function() {
  createCanvas(310, 130);
  a = createInput();
  a.position(8, height + 10);
  a.size(width - 4);
  bg(0);
  textSize(30);
  return textAlign(LEFT, CENTER);
};

display = function() {
  var i, j, len, n, ref, results;
  bg(0);
  fc(1);
  n = stack.length;
  ref = range(4);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if (i < n) {
      results.push(text(stack[n - 1 - i], 10, height - 20 - i * 30));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

op1 = function(f) {
  return stack.push(f(stack.pop()));
};

op2 = function(f) {
  return stack.push(f(stack.pop(), stack.pop()));
};

keyPressed = function() {
  var cmd, cmds, j, len, x;
  if (keyCode !== ENTER) {
    return;
  }
  cmds = a.value().split(' ');
  a.value('');
  for (j = 0, len = cmds.length; j < len; j++) {
    cmd = cmds[j];
    switch (cmd) {
      case 'pi':
        stack.push(PI);
        break;
      case 'drp':
        stack.pop();
        break;
      case 'clr':
        stack = [];
        break;
      case '':
        x = stack.pop();
        stack.push(x);
        stack.push(x);
        break;
      case 'sq':
        op1(function(a) {
          return a * a;
        });
        break;
      case 'sin':
        op1(function(a) {
          return sin(radians(a));
        });
        break;
      case '+':
        op2(function(a, b) {
          return b + a;
        });
        break;
      case '*':
        op2(function(a, b) {
          return b * a;
        });
        break;
      case '-':
        op2(function(a, b) {
          return b - a;
        });
        break;
      case '/':
        op2(function(a, b) {
          return b / a;
        });
        break;
      default:
        stack.push(parseFloat(cmd));
    }
  }
  return display();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBOztBQUFBLENBQUEsR0FBSTs7QUFDSixLQUFBLEdBQVE7O0FBRVIsS0FBQSxHQUFRLFNBQUE7RUFDUCxZQUFBLENBQWEsR0FBYixFQUFpQixHQUFqQjtFQUNBLENBQUEsR0FBSSxXQUFBLENBQUE7RUFDSixDQUFDLENBQUMsUUFBRixDQUFXLENBQVgsRUFBYyxNQUFBLEdBQVMsRUFBdkI7RUFDQSxDQUFDLENBQUMsSUFBRixDQUFPLEtBQUEsR0FBTSxDQUFiO0VBQ0EsRUFBQSxDQUFHLENBQUg7RUFDQSxRQUFBLENBQVMsRUFBVDtTQUNBLFNBQUEsQ0FBVSxJQUFWLEVBQWUsTUFBZjtBQVBPOztBQVNSLE9BQUEsR0FBVSxTQUFBO0FBQ1QsTUFBQTtFQUFBLEVBQUEsQ0FBRyxDQUFIO0VBQ0EsRUFBQSxDQUFHLENBQUg7RUFDQSxDQUFBLEdBQUksS0FBSyxDQUFDO0FBQ1Y7QUFBQTtPQUFBLHFDQUFBOztJQUNDLElBQUcsQ0FBQSxHQUFJLENBQVA7bUJBQ0MsSUFBQSxDQUFLLEtBQU0sQ0FBQSxDQUFBLEdBQUUsQ0FBRixHQUFJLENBQUosQ0FBWCxFQUFtQixFQUFuQixFQUF1QixNQUFBLEdBQVMsRUFBVCxHQUFjLENBQUEsR0FBRSxFQUF2QyxHQUREO0tBQUEsTUFBQTsyQkFBQTs7QUFERDs7QUFKUzs7QUFRVixHQUFBLEdBQU0sU0FBQyxDQUFEO1NBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxDQUFBLENBQUUsS0FBSyxDQUFDLEdBQU4sQ0FBQSxDQUFGLENBQVg7QUFBUDs7QUFDTixHQUFBLEdBQU0sU0FBQyxDQUFEO1NBQU8sS0FBSyxDQUFDLElBQU4sQ0FBVyxDQUFBLENBQUUsS0FBSyxDQUFDLEdBQU4sQ0FBQSxDQUFGLEVBQWUsS0FBSyxDQUFDLEdBQU4sQ0FBQSxDQUFmLENBQVg7QUFBUDs7QUFFTixVQUFBLEdBQWEsU0FBQTtBQUNaLE1BQUE7RUFBQSxJQUFVLE9BQUEsS0FBVyxLQUFyQjtBQUFBLFdBQUE7O0VBQ0EsSUFBQSxHQUFPLENBQUMsQ0FBQyxLQUFGLENBQUEsQ0FBUyxDQUFDLEtBQVYsQ0FBZ0IsR0FBaEI7RUFDUCxDQUFDLENBQUMsS0FBRixDQUFRLEVBQVI7QUFDQSxPQUFBLHNDQUFBOztBQUNDLFlBQU8sR0FBUDtBQUFBLFdBQ00sSUFETjtRQUVFLEtBQUssQ0FBQyxJQUFOLENBQVcsRUFBWDtBQURJO0FBRE4sV0FHTSxLQUhOO1FBSUUsS0FBSyxDQUFDLEdBQU4sQ0FBQTtBQURJO0FBSE4sV0FLTSxLQUxOO1FBTUUsS0FBQSxHQUFRO0FBREo7QUFMTixXQU9NLEVBUE47UUFRRSxDQUFBLEdBQUksS0FBSyxDQUFDLEdBQU4sQ0FBQTtRQUNKLEtBQUssQ0FBQyxJQUFOLENBQVcsQ0FBWDtRQUNBLEtBQUssQ0FBQyxJQUFOLENBQVcsQ0FBWDtBQUhJO0FBUE4sV0FXTSxJQVhOO1FBWUUsR0FBQSxDQUFJLFNBQUMsQ0FBRDtpQkFBTyxDQUFBLEdBQUU7UUFBVCxDQUFKO0FBREk7QUFYTixXQWFNLEtBYk47UUFjRSxHQUFBLENBQUksU0FBQyxDQUFEO2lCQUFPLEdBQUEsQ0FBSSxPQUFBLENBQVEsQ0FBUixDQUFKO1FBQVAsQ0FBSjtBQURJO0FBYk4sV0FlTSxHQWZOO1FBZ0JFLEdBQUEsQ0FBSSxTQUFDLENBQUQsRUFBRyxDQUFIO2lCQUFTLENBQUEsR0FBRTtRQUFYLENBQUo7QUFESTtBQWZOLFdBaUJNLEdBakJOO1FBa0JFLEdBQUEsQ0FBSSxTQUFDLENBQUQsRUFBRyxDQUFIO2lCQUFTLENBQUEsR0FBRTtRQUFYLENBQUo7QUFESTtBQWpCTixXQW1CTSxHQW5CTjtRQW9CRSxHQUFBLENBQUksU0FBQyxDQUFELEVBQUcsQ0FBSDtpQkFBUyxDQUFBLEdBQUU7UUFBWCxDQUFKO0FBREk7QUFuQk4sV0FxQk0sR0FyQk47UUFzQkUsR0FBQSxDQUFJLFNBQUMsQ0FBRCxFQUFHLENBQUg7aUJBQVMsQ0FBQSxHQUFFO1FBQVgsQ0FBSjtBQURJO0FBckJOO1FBd0JFLEtBQUssQ0FBQyxJQUFOLENBQVcsVUFBQSxDQUFXLEdBQVgsQ0FBWDtBQXhCRjtBQUREO1NBMEJBLE9BQUEsQ0FBQTtBQTlCWSIsInNvdXJjZXNDb250ZW50IjpbImEgPSAwXG5zdGFjayA9IFtdXG5cbnNldHVwID0gLT5cblx0Y3JlYXRlQ2FudmFzIDMxMCwxMzBcblx0YSA9IGNyZWF0ZUlucHV0KClcblx0YS5wb3NpdGlvbiA4LCBoZWlnaHQgKyAxMFxuXHRhLnNpemUgd2lkdGgtNFxuXHRiZyAwXG5cdHRleHRTaXplIDMwXG5cdHRleHRBbGlnbiBMRUZULENFTlRFUlxuXG5kaXNwbGF5ID0gLT5cblx0YmcgMFxuXHRmYyAxXG5cdG4gPSBzdGFjay5sZW5ndGhcblx0Zm9yIGkgaW4gcmFuZ2UgNFxuXHRcdGlmIGkgPCBuXG5cdFx0XHR0ZXh0IHN0YWNrW24tMS1pXSwgMTAsIGhlaWdodCAtIDIwIC0gaSozMFxuXG5vcDEgPSAoZikgLT4gc3RhY2sucHVzaCBmIHN0YWNrLnBvcCgpXG5vcDIgPSAoZikgLT4gc3RhY2sucHVzaCBmIHN0YWNrLnBvcCgpLCBzdGFjay5wb3AoKVxuXG5rZXlQcmVzc2VkID0gLT5cblx0cmV0dXJuIGlmIGtleUNvZGUgIT0gRU5URVJcblx0Y21kcyA9IGEudmFsdWUoKS5zcGxpdCAnICdcblx0YS52YWx1ZSAnJ1xuXHRmb3IgY21kIGluIGNtZHNcblx0XHRzd2l0Y2ggY21kXG5cdFx0XHR3aGVuICdwaSdcblx0XHRcdFx0c3RhY2sucHVzaCBQSVxuXHRcdFx0d2hlbiAnZHJwJ1xuXHRcdFx0XHRzdGFjay5wb3AoKVxuXHRcdFx0d2hlbiAnY2xyJ1xuXHRcdFx0XHRzdGFjayA9IFtdXG5cdFx0XHR3aGVuICcnXG5cdFx0XHRcdHggPSBzdGFjay5wb3AoKVxuXHRcdFx0XHRzdGFjay5wdXNoIHhcblx0XHRcdFx0c3RhY2sucHVzaCB4XG5cdFx0XHR3aGVuICdzcSdcblx0XHRcdFx0b3AxIChhKSAtPiBhKmFcblx0XHRcdHdoZW4gJ3Npbidcblx0XHRcdFx0b3AxIChhKSAtPiBzaW4gcmFkaWFucyBhXG5cdFx0XHR3aGVuICcrJyBcblx0XHRcdFx0b3AyIChhLGIpIC0+IGIrYVxuXHRcdFx0d2hlbiAnKidcblx0XHRcdFx0b3AyIChhLGIpIC0+IGIqYVxuXHRcdFx0d2hlbiAnLSdcblx0XHRcdFx0b3AyIChhLGIpIC0+IGItYVxuXHRcdFx0d2hlbiAnLydcblx0XHRcdFx0b3AyIChhLGIpIC0+IGIvYVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRzdGFjay5wdXNoIHBhcnNlRmxvYXQgY21kXG5cdGRpc3BsYXkoKVxuIl19
//# sourceURL=C:\github\Training\calculator.coffee