
var lifeE = 10;
var lifeD = 10;
var raf;
var enCour = [];
var index = [];

function fight(){
    lifeEmilie(lifeE);
    lifeDragon(lifeD);
    drawQTE();
    document.onkeydown = keyHandle;
}
/**
 * Cette fonction permet de clear un canvas
 * @param ctx
 * @param c
 */
function clear(ctx ,c) {
    ctx.clearRect(0, 0, c.width, c.height);
}

/**
 * Cette fonction permet de clear un canvas et d'y mettre le fond du QTE
 * @param ctx
 * @param c
 */
function clearFight(ctx ,c) {
    ctx.clearRect(0, 0, c.width, c.height);
    drawQTE();
}

/**
 * Cette fonction dessine le canvas de la vie d'Emilie
 */
function lifeEmilie(){
    if(lifeE >= 0){
        var c = document.getElementById("EmilieLife");
        var ctx = c.getContext("2d");
        clear(ctx,c);
        ctx.drawImage(imgVieEmilie,0,0,350,160);
        ctx.fillStyle="#55FF55";
        ctx.fillRect(92,115,22*lifeE,15);
    }
}

/**
 * Cette fonction dessine le canvas de la vie du dragon
 */
function lifeDragon(){
    if(lifeD >= 0) {
        var pos = 220 - 22*lifeD;
        var c = document.getElementById("DragonLife");
        var ctx = c.getContext("2d");
        clear(ctx,c);
        ctx.drawImage(imgVieDragon,100,0,350,160);
        ctx.fillStyle="#FF5555";
        ctx.fillRect(150+pos,111,22*lifeD,15);
    }
}

/**
 * Cette fonction dessine le canvas du QTE
 */
function drawQTE(){
    var c = document.getElementById("canvasFightDragon");
    var ctx = c.getContext("2d");
    ctx.drawImage(imgFond,0,-400);
    ctx.drawImage(imgDragon,550,200,500,350);
    ctx.drawImage(imgEmilie,50,325,150,200);;
}

/**
 * Cette fonction permet de prendre en compte les fleches directionnelles
 * @param e
 */
function keyHandle(e){
    e = e || event;
    if(e.keyCode == enCour[0]){
        lifeD -= 1;
        lifeDragon();
        enCour.splice(0,1);
    }
    else{
        lifeE -=1;
        lifeEmilie();
    }
}

/**
 * Cette fonciton dessine une fleche aléatoirement
 * @param left
 */
function drawFleche(left){
    index.push(index.length);
    var c = document.getElementById("canvasFightDragon");
    var ctx = c.getContext("2d");
    var top = -10;
    var alea = Math.floor((Math.random() * 3) + 0);
    var img = arrows[alea];
    addEnCour(img);
    drawDescenteFleche(img,c,ctx,top,left,c.height);
}

/**
 * Cette fonction fait descendre la fleche de drawFleche
 * @param img
 * @param c
 * @param ctx
 * @param top
 * @param left
 * @param height
 */
function drawDescenteFleche(img, c, ctx, top, left, height){
    clearFight(ctx,c);
    top = top + 5;
    if(drawOrNotdraw(img)){
        ctx.drawImage(img,left,top);
    }
    if(top <= height){
        raf = window.requestAnimationFrame(function(){
            drawDescenteFleche(img, c, ctx, top, left, height);
        });
    }
    else{
        if(enCour.length != 0){
            lifeE -=1;
            lifeEmilie();
            enCour.splice(0,1);
        }
        if(lifeD > 0 && lifeE > 0){
            if(left = 250){
                drawFleche(350);
            }
            else if(left = 350){
                drawFleche(450);
            }
            else if(left = 450){
                drawFleche(250);
            }
        }
        else if(lifeD <= 0){
            showText("Dragon", "/ Comment oses-tu ?! VA ! Reprend ton Prince et allez-vous en ! / " +
                "Vous avez terminé le jeu ! Félicitation ! Une petite photo souvenir pour vous remémorer ce magnifique combat ?",0);

            setTimeout(function() {
                document.location.href = "photo-finish.html";
            }, 10000);


        }
        else if(lifeE <= 0){
            showText("Dragon", "/ Hahaha ! Tu es faible ! Essaye encore...",0);

            setTimeout(function() {
                lifeD = 10;
                lifeE = 10;
                lifeDragon();
                lifeEmilie();
                drawQTE();
                drawFleche(250);
            }, 4000);
        }
    }
}

/**
 * Cette fonction ajoute le code de la fleche au tableau en cour
 * @param img
 */
function addEnCour(img){
    if(img.src.includes("img/QTE/Arrows/arrowKeys_Up.png")){
        enCour.push(38);
    }
    else if(img.src.includes("img/QTE/Arrows/arrowKeys_Down.png")){
        enCour.push(40);
    }
    else if(img.src.includes("img/QTE/Arrows/arrowKeys_Left.png")){
        enCour.push(37);
    }
    else if(img.src.includes("img/QTE/Arrows/arrowKeys_Right.png")){
        enCour.push(39);
    }
}

/**
 * retourne true si l'image correspond au premier du tableau enCour
 * @param img
 * @returns {*}
 */
function drawOrNotdraw(img){
    switch (enCour[0]){
        case 38:
            return img.src.includes("img/QTE/Arrows/arrowKeys_Up.png");
        case 40:
            return img.src.includes("img/QTE/Arrows/arrowKeys_Down.png");
        case 37:
            return img.src.includes("img/QTE/Arrows/arrowKeys_Left.png");
        case 39:
            return img.src.includes("img/QTE/Arrows/arrowKeys_Right.png");
        default:
            break;
    }
}

function lanceQTE(){
    setTimeout(function(){
        drawFleche(250);
    },1000);
}