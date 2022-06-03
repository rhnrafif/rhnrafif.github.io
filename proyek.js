var x = document.getElementById("ya");
x.addEventListener("click", myFunction);

function myFunction() {

  document.getElementById("ronaldo").removeAttribute("hidden");
  var button1 = document.getElementById("ya");
  button1.remove();
  var button2 = document.getElementById("bukan");
  button2.remove();
  document.getElementById('cap').innerHTML = "Sssiiiiiiuuuuuu!!!";
}

var y = document.getElementById("bukan");
y.addEventListener("click", myFunction2);

function myFunction2() {

  document.getElementById("bukanronaldo").removeAttribute("hidden");
  var button1 = document.getElementById("ya");
  button1.remove();
  var button2 = document.getElementById("bukan");
  button2.remove();
    document.getElementById('cap').innerHTML = ":) :)";
}
