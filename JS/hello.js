const hello = document.querySelector(".hello");

setInterval(print, 20000);

function print() {
    hello.style.display = "none";
    setTimeout(function () {
        hello.style.display = "flex";
    }, 10);
}
