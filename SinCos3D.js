// Generated by CoffeeScript 1.11.1
var draw, setup;

setup = function() {
  return createCanvas(1800, 1000, WEBGL);
};

draw = function() {
  var i, j, k, l, len, len1, ref, ref1, results, t, x;
  t = frameCount
  rotateX(mouseY * 0.005);
  rotateY(mouseX * 0.002);
  ref = range(5);
  results = [];
  for (k = 0, len = ref.length; k < len; k++) {
    j = ref[k];
    push();
    x = 100 * sin(t * 0.001 + j);
    ref1 = range(80);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      i = ref1[l];
      translate(x, x, i * 0.1);
      rotateZ(t * 0.002);
      sphere(8);
    }
    results.push(pop());
  }
  return results;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luQ29zM0QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaW5Db3MzRC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLElBQUE7O0FBQUEsS0FBQSxHQUFRLFNBQUE7U0FBRyxZQUFBLENBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixLQUF6QjtBQUFIOztBQUNSLElBQUEsR0FBTyxTQUFBO0FBQ0wsTUFBQTtFQUFBLENBQUEsR0FBSTtFQUNKLE9BQUEsQ0FBUSxNQUFBLEdBQVMsS0FBakI7RUFDQSxPQUFBLENBQVEsTUFBQSxHQUFTLEtBQWpCO0FBQ0E7QUFBQTtPQUFBLHFDQUFBOztJQUNFLElBQUEsQ0FBQTtJQUNBLENBQUEsR0FBSSxHQUFBLEdBQU0sR0FBQSxDQUFJLENBQUEsR0FBSSxLQUFKLEdBQVksQ0FBaEI7QUFDVjtBQUFBLFNBQUEsd0NBQUE7O01BQ0UsU0FBQSxDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQUEsR0FBSSxHQUFwQjtNQUNBLE9BQUEsQ0FBUSxDQUFBLEdBQUksS0FBWjtNQUNBLE1BQUEsQ0FBTyxDQUFQO0FBSEY7aUJBSUEsR0FBQSxDQUFBO0FBUEY7O0FBSksiLCJzb3VyY2VzQ29udGVudCI6WyIjIExPQzoxMiBmcmFtZUNvdW50IHB1c2ggcG9wIHJhbmdlIHJvdGF0ZVogc2luIHNwaGVyZSB0cmFuc2xhdGVcclxuc2V0dXAgPSAtPiBjcmVhdGVDYW52YXMgMTgwMCwgMTAwMCwgV0VCR0xcclxuZHJhdyA9IC0+XHJcbiAgdCA9IGZyYW1lQ291bnQgXHJcbiAgcm90YXRlWCBtb3VzZVkgKiAwLjAwNVxyXG4gIHJvdGF0ZVkgbW91c2VYICogMC4wMDIgXHJcbiAgZm9yIGogaW4gcmFuZ2UgNVxyXG4gICAgcHVzaCgpXHJcbiAgICB4ID0gMTAwICogc2luIHQgKiAwLjAwMSArIGpcclxuICAgIGZvciBpIGluIHJhbmdlIDgwXHJcbiAgICAgIHRyYW5zbGF0ZSB4LCB4LCBpICogMC4xXHJcbiAgICAgIHJvdGF0ZVogdCAqIDAuMDAyXHJcbiAgICAgIHNwaGVyZSA4XHJcbiAgICBwb3AoKSJdfQ==
//# sourceURL=C:\github\SmallSketches\SinCos3D.coffee
