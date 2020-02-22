function Evaluate() {
  let scores = $("input").map(function(){return parseInt($(this).val());}).get();
  let sum = scores.reduce((x, y) => x + y, 0);
  let result = sum / $("div#input input").length;
  alert(result);
}
