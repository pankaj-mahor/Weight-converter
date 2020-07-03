const lbsinput = document.getElementById("lbsinput");
var gramoutput = document.getElementById("gout");
var kgramoutput = document.getElementById("kgout");
var ounoutput = document.getElementById("oout");
var output = document.getElementById("output");
var miligram = document.getElementById("mili");
var tonne = document.getElementById("tonne");

// output hidden 

output.style.visibility="hidden";
lbsinput.addEventListener("input",function(e){
    let lbs = e.target.value;
    output.style.visibility = "visible";
    gramoutput.innerHTML = (lbs/0.0022046).toFixed(3);
    kgramoutput.innerHTML = (lbs/2.2046).toFixed(3);
    ounoutput.innerHTML = lbs*16;
    tonne.innerHTML =( lbs/2205).toFixed(9);
    miligram.innerHTML = lbs*453592;
});