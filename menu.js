

document.getElementById("buttonOpen").addEventListener("click",function(){
    document.getElementById("menu").style.left="0px"
});

document.getElementById("buttonClose").addEventListener("click",function(){
    document.getElementById("menu").style.left="-110px"
});

document.getElementById("buttonMake").addEventListener("click",function(){
    document.getElementById("bg").style.backgroundImage = document.getElementById("zoom").style.backgroundImage
});

document.getElementById("buttonReset").addEventListener("click",function(){
    document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("buttonShow").addEventListener("click",function(){
    document.getElementById("app1").style.display = "block";
});

document.getElementById("buttonHide").addEventListener("click",function(){
    document.getElementById("app1").style.display = "none";
});