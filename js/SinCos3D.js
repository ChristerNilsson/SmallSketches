// Generated by CoffeeScript 1.12.7
var draw, setup;

setup = function() {
  return createCanvas(1800, 1000, WEBGL);
};

draw = function() {
  var i, j, k, l, len, len1, ref, ref1, results, t, x;
  t = frameCount / 100;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luQ29zM0QuanMiLCJzb3VyY2VSb290IjoiLi4iLCJzb3VyY2VzIjpbImNvZmZlZVxcU2luQ29zM0QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFBOztBQUFBLEtBQUEsR0FBUSxTQUFBO1NBQUcsWUFBQSxDQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekI7QUFBSDs7QUFDUixJQUFBLEdBQU8sU0FBQTtBQUNMLE1BQUE7RUFBQSxDQUFBLEdBQUksVUFBQSxHQUFZO0VBQ2hCLE9BQUEsQ0FBUSxNQUFBLEdBQVMsS0FBakI7RUFDQSxPQUFBLENBQVEsTUFBQSxHQUFTLEtBQWpCO0FBQ0E7QUFBQTtPQUFBLHFDQUFBOztJQUNFLElBQUEsQ0FBQTtJQUNBLENBQUEsR0FBSSxHQUFBLEdBQU0sR0FBQSxDQUFJLENBQUEsR0FBSSxLQUFKLEdBQVksQ0FBaEI7QUFDVjtBQUFBLFNBQUEsd0NBQUE7O01BQ0UsU0FBQSxDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQUEsR0FBSSxHQUFwQjtNQUNBLE9BQUEsQ0FBUSxDQUFBLEdBQUksS0FBWjtNQUNBLE1BQUEsQ0FBTyxDQUFQO0FBSEY7aUJBSUEsR0FBQSxDQUFBO0FBUEY7O0FBSksiLCJzb3VyY2VzQ29udGVudCI6WyIjIExPQzoxMiBmcmFtZUNvdW50IHB1c2ggcG9wIHJhbmdlIHJvdGF0ZVogc2luIHNwaGVyZSB0cmFuc2xhdGVcclxuc2V0dXAgPSAtPiBjcmVhdGVDYW52YXMgMTgwMCwgMTAwMCwgV0VCR0xcclxuZHJhdyA9IC0+XHJcbiAgdCA9IGZyYW1lQ291bnQgLzEwMCBcclxuICByb3RhdGVYIG1vdXNlWSAqIDAuMDA1XHJcbiAgcm90YXRlWSBtb3VzZVggKiAwLjAwMiBcclxuICBmb3IgaiBpbiByYW5nZSA1XHJcbiAgICBwdXNoKClcclxuICAgIHggPSAxMDAgKiBzaW4gdCAqIDAuMDAxICsgalxyXG4gICAgZm9yIGkgaW4gcmFuZ2UgODBcclxuICAgICAgdHJhbnNsYXRlIHgsIHgsIGkgKiAwLjFcclxuICAgICAgcm90YXRlWiB0ICogMC4wMDJcclxuICAgICAgc3BoZXJlIDhcclxuICAgIHBvcCgpXHJcbiJdfQ==
//# sourceURL=C:\github\SmallSketches\coffee\SinCos3D.coffee