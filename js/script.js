function gira180(e){
    e.style.transform="rotateY(180deg)";
    e.style.transition="all 1s";
}

function gira0(e){
    e.style.transform="rotateY(0)";
    e.style.transition="all 1s";
}
function gira360(e){
    e.style.transform="rotateY(360deg)";
    e.style.transition="all 1s";
}

for(var i=0; i<document.getElementsByClassName("iconoLogin").length; i++)
{
    document.getElementsByClassName("iconoLogin")[i].setAttribute("onmouseover", "gira180(this)");
    document.getElementsByClassName("iconoLogin")[i].setAttribute("onmouseout", "gira0(this)");
}
for(var i=0; i<document.getElementsByClassName("conte30").length; i++)
{
    document.getElementsByClassName("conte30")[i].setAttribute("onmouseover", "gira360(this)");
    document.getElementsByClassName("conte30")[i].setAttribute("onmouseout", "gira0(this)");
}
function trasparente(e){
    e.style.opacity="0.5"; 
    e.style.transition="all 1.5s";
    e.style.border= "5px solid rgb(63, 62, 62)";
 
}

function nitido(e){
    e.style.opacity="1"; 
    e.style.transition="all 1.5s";
    e.style.border= "1px solid rgb(63, 62, 62)";
}
for(var i=0; i<document.getElementsByClassName("conte4").length; i++)
{
    document.getElementsByClassName("conte4")[i].setAttribute("onmouseover", "trasparente(this)");
    document.getElementsByClassName("conte4")[i].setAttribute("onmouseout", "nitido(this)");
}
