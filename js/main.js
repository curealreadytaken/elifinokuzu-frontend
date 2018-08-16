function myFunction() {
    document.querySelector("#divLogin").classList.toggle("is-visible");
}

function myFunction2() {
    document.getElementById("id02").style.display = "block";
}
function myFunction3() {
    document.getElementById("id01").style.display = "block";
}

function myFunction4() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("divLogin").style.display = "none";
    document.getElementById("submit").style.display = "block";
    document.getElementById("name").style.display = "block";
}

document.querySelector("#login").addEventListener("click", myFunction);
document.querySelector("#signup").addEventListener("click", myFunction2);
document.querySelector("#submit").addEventListener("click", myFunction3);
document.querySelector("#btnLogin").addEventListener("click", myFunction4);
