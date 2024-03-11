document.getElementById("btn").onclick = function () {

  const method1 = document.getElementById("var1").value;
   const method2 = method1[0].toUpperCase() + method1.slice(1);

  document.getElementById("res").innerHTML = " Capitalized String " + method2;
};
