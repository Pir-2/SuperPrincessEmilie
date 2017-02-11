var map = null;
var tileset = null;
var tiles_dimension = 32;
var tileset_width = 10;
var tileset_height = 16;
//position x de la tile en fonction de son numéro
var tileset_x = new Array();
//position y de la tile en fonction de son numéro
var tileset_y = new Array();

var player = null;

/**
 * Permet de stocker la sortie d'une maison lorsque l'on rentre dedans (Voir fonction leaveHouse
 */
var coordDoor = null;

/**
 * Booléen indiquant si le joueur possède les items nécessaires pour entrer dans la grotte
 */
var haveTorch = false;
var haveCompass = false;

/**
 * Saisir dans ce tableau l'id des tiles ou le personnage peut se déplacer.
 */
var tileAvailable = [0, 1, 2, 3, 4, 5, 6, 7, 17, 38, 39, 46];

/**
 * Saisir dans ce tableau l'id des tiles représentant un PNJ à qui parler
 */
var tileToTalk = [56, 47, 48, 49, 57, 58, 59, 67, 68, 69];

/**
 * Lorsque le HTML est chargé,
 *      Initialise la map
 *      Initialise le joueur
 *      Dessine le tout
 *      Ecoute les saisies clavier
 */
$(document).ready(function() {
    initTileSet();
    //ICI
    map = new Map(5);

    player = new Player();


    Dessiner();
    sonDebut();
    document.onkeydown = khandle
});

/**
 * Initialise l'image contenant toutes les tiles.
 * Découpe l'image pour récupérer chaque tiles
 */
function initTileSet() {
    //image contenant toutes les tile pour ne charger un seul fichier qu'une seule fois
    tileset = document.getElementById("tileset");

    //on remplit les variables tileset_x et tileset_y
    for(var i=0; i<tileset_width; i++)
    {
        for(var j=0; j<tileset_width; j++)
        {
            tileset_x[j*tileset_width+i]=i*tiles_dimension;
            tileset_y[j*tileset_width+i]=j*tiles_dimension;
        }
    }
}

/**
 * Dessine la map et le personnage
 * @constructor
 */
function Dessiner() {
    //==================================================Affichage====================================================
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //on dessine la map sur le canvas
    for(var y=0; y<map.hauteur; y++)
    {
        for(var x=0; x<map.largeur; x++)
        {
            ctx.drawImage(tileset,tileset_x[map.map[y][x]],tileset_y[map.map[y][x]],tiles_dimension,
                tiles_dimension,x*tiles_dimension,y*tiles_dimension,tiles_dimension,tiles_dimension);
        }
    }
    //on dessine le joueur
    ctx.drawImage(player.sprite,player.x[player.regard],player.y[player.regard],player.width,player.height,player.position_x*tiles_dimension,player.position_y*tiles_dimension-player.height+tiles_dimension,player.width,player.height);
    if(map.id == 3 ||map.id == 6){
        //drawHalo(player.position_x,player.position_y);
    }
}

function drawHalo(x, y){
    var halo = document.getElementById("halo");

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.drawImage(halo,x*30-1450,y*30-1450);
}

/**
 * Gère les mouvements du personnage
 * @param e
 */
function khandle(e) {
    e = e || event;
    var evt = e.type;

    //haut
    if(e.keyCode === 38)
    {
        player.regard=0;

        if(player.position_y > 0) {
            if(tileAvailable.includes(map.map[player.position_y-1][player.position_x])) {
                if(map.map[player.position_y-1][player.position_x] === 463) {
                    enterHouse(map.id, player.position_x, player.position_y-1);
                }
               player.position_y--;
            }
        } else {
            mapTop(map.id)
        }
    }
    //gauche
    if(e.keyCode === 37)
    {
        player.regard=1;

        if(tileAvailable.includes(map.map[player.position_y][player.position_x-1])) {
            if(player.position_x>0)player.position_x--;
        } else {
            if(player.position_x === 0) {
                //Changement de map
                mapLeft(map.id)
            }
        }
    }
    //bas
    if(e.keyCode === 40)
    {
        player.regard=2;
        if(player.position_y < 19){
            if(tileAvailable.includes(map.map[player.position_y+1][player.position_x])) {
                if(map.map[player.position_y+1][player.position_x] === 463) {
                    leaveHouse();
                }
                if(player.position_y<map.hauteur-1)player.position_y++;
            }
        }
        else{
            mapBottom(map.id);
        }
    }
    //droite
    if(e.keyCode === 39)
    {
        player.regard=3;

        if(tileAvailable.includes(map.map[player.position_y][player.position_x+1])) {
            player.position_x++;
        } else {
            if(player.position_x === map.largeur-1) {
                //Changement de map
                mapRight(map.id)
            }
        }
    }

    //Espace
    if(e.keyCode === 32)
    {
        switch(player.regard) {
            case 0:
                if(tileToTalk.includes(map.map[player.position_y-1][player.position_x])) {
                    startToTalk(map.map[player.position_y-1][player.position_x]);
                } break;
            case 1:
                if(tileToTalk.includes(map.map[player.position_y][player.position_x-1])) {
                    startToTalk(map.map[player.position_y][player.position_x-1]);
                } break;
            case 2:
                if(tileToTalk.includes(map.map[player.position_y+1][player.position_x])) {
                    startToTalk(map.map[player.position_y+1][player.position_x]);
                } break;
            case 3:
                if(tileToTalk.includes(map.map[player.position_y][player.position_x+1])) {
                    startToTalk(map.map[player.position_y][player.position_x+1]);
                } break;
        }
    }

    //Ferme la discussion avec le singe (TEST)
    if(e.keyCode === 27)
    {
        $("#myCanvas").show();
        $("#divTorchQuest").hide();
    }

    if(e.keyCode === 13)
    {
        enterPressed = true;
    }

    /**
     * bouton dans la première map de labyrinthe
     */
    if((map.map[player.position_y][player.position_x]) == 46){
        if(map.id == 3){
            if(player.position_y == 5 && player.position_x == 1){
                map.map[10][10] = 3;
            }
            else{
                map.map[2][13] = 3;
                map.map[3][13] = 3;
            }
            sonButton();
        }
    }
    else if((map.map[player.position_y][player.position_x]) == 39){
        mapLevelInf(map.id);
    }
    else if((map.map[player.position_y][player.position_x]) == 38){
        mapLevelUp(map.id);
    }

    Dessiner();
}

/**
 * Permet de rentrer dans la maison. ATTENTION CHARGE TOUJOURS LE MÊME INTERIEUR
 * Les paramètres permettent de ressortir de la maison
 * @param mapId: iD de la map ou la maison est située
 * @param xDoor: coordonnée x de la porte
 * @param yDoor: coordonnée y-1 de la porte
 */
function enterHouse(mapId, xDoor, yDoor) {
    coordDoor = [mapId, xDoor, yDoor];
    map = new Map(5);
    player.position_x = 9;
    player.position_y = 15;
}

function leaveHouse() {
    map = new Map(coordDoor[0]);
    player.position_x = coordDoor[1];
    player.position_y = coordDoor[2];
}

/**
 * Change de map lorsque le personnage est le plus à droite d'une map
 * @param id de la map actuelle
 */
function mapRight(id) {
    switch(id) {
        case 2:
            map = new Map(0);
            player.position_x = 0;
            player.position_y = 12;
            break;
        case 0:
            map = new Map(1);
            player.position_x = 0;
            player.position_y = 8;
            break;
        case 4:
            map = new Map(3);
            player.position_x = 0;
            break;
        case 1:
            map = new Map(5);
            player.position_x = 0;
            player.position_y = 8;
            break;
    }
}

/**
 * Change de map lorsque le personnage est le plus à gauche d'une map
 * @param id de la map actuelle
 */
function mapLeft(id) {
    switch(id) {
        case 1:
            map = new Map(0);
            player.position_x = 19;
            player.position_y = 12;
            break;
        case 0:
            map = new Map(2);
            player.position_x = 19;
            player.position_y = 8;
            break;
        case 3:
            sonDebut();
            launchLightDown();
            map = new Map(4);
            player.position_x = 19;
            break;
        case 5:
            sonDebut();
            map = new Map(1);
            player.position_x = 19;
            break;
    }
}

/**
 * Change de map lorsque le personnage est le plus en haut d'une map
 * @param id de la map actuelle
 */
function mapTop(id) {
    drawHalo(player.position_x,player.position_y);
    switch(id) {
        case 5:
            if(true) { //haveTorch && haveCompass
                sonGrotte();
                map = new Map(3);
                player.position_y = 19;//19
                break;
            } else {
                alert("Tu es sur le point d'entrer dans la grotte ! " +
                    "C'est trop dangereux sans des équipements pour te repérer !");
                player.regard=2;
                player.position_y++;
            }
    }
}

function mapBottom(id) {
    switch(id) {
        case 3:
            map = new Map(5);
            player.position_y = 0;
            break;
    }
}

function mapLevelInf(id){
    switch (id) {
        case 3:
            map = new Map(6);
            player.position_x = player.position_x+1;
            break;
        default:
            break;
    }
}

function mapLevelUp(id){
    switch (id) {
        case 6:
            map = new Map(3);
            player.position_x = player.position_x-1;
            break;
        default:
            break;
    }
}


/**
 * Appelé lorsque le joueur se trouve en face d'un PNJ.
 * Recherche le PNJ et lance la discussion correspondant
 * @param idPnj
 */
function startToTalk(idPnj) {
    switch(idPnj) {
        case 119:
            //launchMonkeyQuest();
            launchTorchQuest();
            break;
        case 56:
            launchCompassQuest();
            break;
    }
}

/**
 * Démarre la quête de la torche après avoir parlé au PNJ
 * Affiche la box de dialogue, lance le texte et affiche la fenetre de minijeu
 */
function launchTorchQuest() {
    showTextAndLaunchQuest("Tortue géniale", "Des marchands ont vu un groupe de bandits emmener le roi de l'autre côté de la montagne !" +
        "Une ... Une légende raconte qu'il y a un terrible dragon derrière cette montagne... Je crains le pire..." +
        "Si tu veux rattraper les bandits, tu dois passer par la grotte ! " +
        "Je dois avoir une torche dans ce coffre, essaye de la trouver. /" +
        "Pour trouver la torche, déplace le contenu du coffre de gauche dans celui de droite." +
        "Une fois que tu verras la torche, clique dessus.", 0, 1);
}

/**
 * Démarre la quête de la boussole après avoir parlé au PNJ
 */
function launchCompassQuest() {
    showTextAndLaunchQuest("Simon", "Elle est ou Jeanne ? /",0, 2);
}
/**
 * lance l'extinction de la torche
 */
function launchLightDown(){
    showTextAndLaunchQuest("","Souffle pour éteindre la torche. /",0, 3);
}

/**
 * Fonction de dialogue
 * A chaque "/" dans le texte, le contenu s'effacera pour faire de la place
 * @param pnj: Nom de la personne qui parle
 * @param message: Dialogue
 * @param index: Mettre à 0 (Utilisé pour la récursivité)
 * @param questId: Id de la quête à afficher à la fin du dialogue
 */
var showTextAndLaunchQuest = function (pnj, message, index, questId) {
    $(".box").show();

    if (index < message.length) {
        $("#name").html(pnj);

        if(message[index] === "/") {
            $("#message").html("");
            index++;
        } else {
            $("#message").append(message[index++]);
        }

        setTimeout(function () { showTextAndLaunchQuest(pnj, message, index, questId); }, 50);
    } else {
        setTimeout(function () {
            $(".box").hide();
        }, 800);
        showScreenQuest(questId);
    }
}

/**
 * Affiche du dialogue.
 */
var showText = function (pnj, message, index) {
    $(".box").show();

    if (index < message.length) {
        $("#name").html(pnj);

        if(message[index] === "/") {
            $("#message").html("");
            index++;
        } else {
            $("#message").append(message[index++]);
        }

        setTimeout(function () { showTextAndLaunchQuest(pnj, message, index); }, 50);
    } else {
        setTimeout(function () {
            $(".box").hide();
        }, 800);

    }
}

/**
 * Affiche l'écran de la quête à activer.
 * Appelé à la fin d'un dialogue avec un PNJ
 * 1: Quête de la torche
 * 2: Quête de la boussole
 * 3: Combat contre le dragon
 * @param questId
 */
function showScreenQuest(questId) {
    switch(questId) {
        case 1:
            $("#myCanvas").hide();
            $("#divTorchQuest").show();
        case 2:
            $("#myCanvas").hide();
            $("#divCompassQuest").show();
            launchDialog(3);
        case 3:
            $("#myCanvas").hide();
            $("#divLightDown").show();
            $("#sortie").show();
            $("#torche").show();
            microphoneSound();
        default:
            return;
    }
}

function sonButton(){
    soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('boutton','sound/Button.mp3');
}
function sonGrotte(){
    /*soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('Fond','sound/grotte.mp3');*/
}
function sonDebut(){
    /*soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('Fond','sound/village.mp3');*/
}
