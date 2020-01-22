window.addEventListener('load', () => {
document.getElementById("js").addEventListener('click', swap)

});


function swap() {
 if (document.getElementById("js").childNodes[0].nodeName != 'IMG') {
    document.getElementById("js").innerHTML = "<img src='img/js.png'>";
 }
 else{
    document.getElementById("js").innerHTML = "JavaSript";
 }
}