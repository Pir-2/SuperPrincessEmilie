document.getElementById("boutonPlay").addEventListener("click", function(){document.location.href="index.html";});

document.getElementById("boutonControles").addEventListener("click", function(){
    document.getElementById("divTitleScreen").style.visibility="hidden";
    document.getElementById("divControles").style.visibility="visible";
});

document.getElementById("boutonRevenirAuTitre").addEventListener("click", function(){
    document.getElementById("divTitleScreen").style.visibility="visible";
    document.getElementById("divControles").style.visibility="hidden";
});