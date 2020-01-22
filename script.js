window.addEventListener('load', () => {
document.getElementById("js").addEventListener('click', swap)

});


function swap() {
    document.getElementById("js").innerHTML = "<img src='img/js.png'>";
}