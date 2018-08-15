function myFunction() {
    document.querySelector("#divLogin").classList.toggle("is-visible");
}

document.querySelector("#login").addEventListener("click", myFunction);

function myFunction2() {
    document.querySelector("#divSignup").classList.toggle("is-visible");
}

document.querySelector("#signup").addEventListener("click", myFunction2);