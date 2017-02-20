var centi=0 // initialise les dixtièmes
var secon=0 //initialise les secondes
var minu=0 //initialise les minutes

var kH = false;
var kG = false;
var kD = false;
var kB = false;
var maj = false;

var talking = false;
var quest = false;

var vitessemax = 60;
var vitesemin = 20;

var map = null;
var tileset = null;
var tiles_dimension = 32;
var tileset_width = 10;
var tileset_height = 18;
//position x de la tile en fonction de son numéro
var tileset_x = new Array();
//position y de la tile en fonction de son numéro
var tileset_y = new Array();

var imgVieEmilie = new Image();
imgVieEmilie.src = "img/QTE/lifeBar/EmilieLife.png";

var imgVieDragon = new Image();
imgVieDragon.src = "img/QTE/lifeBar/DragonLife.png";

var imgFond = new Image();
imgFond.src = "img/QTE/fondQTE.jpg";

var imgEmilie = new Image();
imgEmilie.src = "img/QTE/Princess.png";

var imgDragon = new Image();
imgDragon.src = "img/QTE/Dragon.png";

var imgHaut = new Image();
imgHaut.src ="img/QTE/Arrows/arrowKeys_Up.png";

var imgBas = new Image();
imgBas.src ="img/QTE/Arrows/arrowKeys_Down.png";

var imgGauche = new Image();
imgGauche.src ="img/QTE/Arrows/arrowKeys_Left.png";

var imgDroite = new Image();
imgDroite.src ="img/QTE/Arrows/arrowKeys_Right.png";

var arrows =[imgHaut,imgBas,imgGauche,imgDroite];

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
var tileAvailable = [0, 1, 2, 3, 4, 5, 6, 7, 8, 38, 39, 46, 116, 129, 130, 140, 141, 142, 143, 153, 159, 160, 161, 162, 163, 170, 171, 172, 173, 138];

/**
 * Saisir dans ce tableau l'id des tiles représentant un PNJ à qui parler
 */
var tileToTalk = [9, 56, 47, 48, 49, 57, 58, 59, 67, 68, 69, 87, 132, 133, 151, 152, 155, 167, 168, 169, 174, 175, 177];

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
    map = new Map(0);

    player = new Player();


    Dessiner();
    sonDebut();
    document.onkeydown = khandle;
    document.onkeyup = khandle2;
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
        for(var j=0; j<tileset_height; j++)
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
        drawHalo(player.position_x,player.position_y);
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
	
    maj = !!e.shiftKey;
	if(maj)
	{
		player.vitesse=vitesemin;
	}
	else
	{
		player.vitesse=vitessemax;
	}
    //haut
    if(e.keyCode === 38)
    {
        kH=true;
        if(!player.mouvement)
        {
            AnimationHaut();
        }
    }
    //gauche
    if(e.keyCode === 37)
    {
        kG=true;
        if(!player.mouvement) {
            AnimationGauche();
        }
    }
    //bas
    if(e.keyCode === 40)
    {
        kB=true;
        if(!player.mouvement) {
            AnimationBas();
        }
    }
    //droite
    if(e.keyCode === 39)
    {
        kD=true;
        if(!player.mouvement) {
            AnimationDroite();
        }
    }

    //Espace
	if(e.keyCode === 32)
	{
		if(!talking && !quest)
		{
		switch(player.regard) {
			case 10:
				if(tileToTalk.includes(map.map[player.position_y-1][player.position_x])) {
					startToTalk(map.map[player.position_y-1][player.position_x]);
				} break;
			case 4:
				if(tileToTalk.includes(map.map[player.position_y][player.position_x-1])) {
					startToTalk(map.map[player.position_y][player.position_x-1]);
				} break;
			case 1:
				if(tileToTalk.includes(map.map[player.position_y+1][player.position_x])) {
					startToTalk(map.map[player.position_y+1][player.position_x]);
				} break;
			case 7:
				if(tileToTalk.includes(map.map[player.position_y][player.position_x+1])) {
					startToTalk(map.map[player.position_y][player.position_x+1]);
				} break;
			}
		}
	}

    if(e.keyCode === 27)
    {
        $("#mainZone").show();
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
}

/**
 * Gère les mouvements du personnage
 * @param e
 */
function khandle2(e)
{
    e = e || event;
    var evt = e.type;

    //haut
    if(e.keyCode === 38)
    {
        kH=false;
    }
    //gauche
    if(e.keyCode === 37)
    {
        kG=false;
    }
    //bas
    if(e.keyCode === 40)
    {
        kB=false;
    }
    //droite
    if(e.keyCode === 39)
    {
        kD=false;
    }

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

    if(xDoor === 9) {
        map = new Map(7);
        player.position_x = 9;
        player.position_y = 15;
    } else if (xDoor === 4) {
        map = new Map(8);
        player.position_x = 9;
        player.position_y = 15;
    } else if (xDoor === 13) {
        map = new Map(9);
        player.position_x = 9;
        player.position_y = 15;
    }
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
            sonDebut();
            map = new Map(0);
            player.position_x = 0;
            player.position_y +=2;
            break;
        case 0:
            map = new Map(1);
            player.position_x = 0;
            player.position_y = 8;
            break;
        case 4:
            map = new Map(3);
            tileAvailable.splice(tileAvailable.length -1, 1);
            player.position_x = 0;
            break;
        case 1:
            sonEntreeGrotte();
            map = new Map(5);
            player.position_x = 0;
            player.position_y = 10;
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
            sonBois();
            map = new Map(2);
            player.position_x = 19;
            player.position_y = 8;
            break;
        case 3:
            launchLightDown();
            map = new Map(4);
            tileAvailable.push(17);
            player.position_x = 19;
            break;
        case 5:
            sonDebut();
            map = new Map(1);
            player.position_x = 19;
            player.position_y -=2;
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
            if(haveTorch && haveCompass) { //haveTorch && haveCompass
                sonGrotte();
                map = new Map(3);
                player.position_y = 19;//19
                break;
            } else {
                alert("Tu es sur le point d'entrer dans la grotte ! " +
                    "C'est trop dangereux sans des équipements pour te repérer !");
                player.position_y++;
            }
    }
}

function mapBottom(id) {
    switch(id) {
        case 3:
            sonEntreeGrotte();
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
function startToTalk(idPnj) 
{
    switch(idPnj) 
	{
        case 9:
            showText("Emilie","/Je ne rentrerais pas avant d'avoir tué la bête !",0);
            break;
        case 56:
            launchCompassQuest();
            break;
        case 47:
        case 48:
        case 49:
        case 57:
        case 58:
        case 59:
        case 67:
        case 68:
        case 69:
            launchDragonFight();
            break;
        case 87:
            showText("Emilie","/En tant que future reine je ne devrais pas espionner mes sujets ainsi.",0);
            break;
        case 132:
        case 133:
            showText("Emilie","/De nombreux ouvrages écrits en langue nanesque mais je ne connais pas le Khuzdul. Oh, celui-ci est écrit dans la langue de mon royaume, ''Le syndrome de stockholm pour les nuls''............Bon bah moi j'ai un dragon qui m'attend.",0);
            break;
        case 151:
        case 152:
            showText("Emilie","/Une tombe. Oh, ma déesse, protège moi en ses heures sombres, donnes moi la force de vaincre, que mon corps n'ailles pas rejoindre celui de ces braves.",0);
            break;
        case 155:
            mapTop(5);
            Dessiner();
            break;
        case 167:
            launchTorchQuest();
            break;
        case 168:
            showText("Fillette","/Tu veux tuer le dragon? Il va te falloir passer par la grotte pour atteindre le coeur du volcan. Le vieil homme d'à côté doit avoir une torche à te prêter. Si tu cherches une boussole j'ai entendu dire que des singes en ont volé une et se sont réfugiés dans la forêt à l'ouest d'ici.",0);
            break;
        case 169:
            showText("Nain","/Si tu touches à un cheveux de notre protégée tu auras affaire à nous!",0);
            break;
        case 174:
            showText("Emilie","/On dirait un vieux journal ... ''Le sol tremble, les tambours viennent des profondeurs, nous ne pouvons plus sortir''...",0);
            break;
        case 175:
            showText("Emilie","/...''Blanche comme la neige'' ''rouges comme le sang'' et ''noirs comme l'ébène''.... mais c'est quoi ce livre?",0);
            break;
        case 177:
            showText("Emilie","/Woah! Les nains aiment vraiment l'argent.",0);
            break;
    }
}

function launchDragonFight(){
    sonBoss();
    showTextAndLaunchQuest("Dragon", "/ Tu viens pour récupérer ton prince! Mais il faudra d'abord me vaincre!",0, 4);
}

/**
 * Démarre la quête de la torche après avoir parlé au PNJ
 * Affiche la box de dialogue, lance le texte et affiche la fenetre de minijeu
 */
function launchTorchQuest() {
    showTextAndLaunchQuest("Vieil homme", "/ Des marchands ont vu un groupe de bandits emmener le roi de l'autre côté de la montagne !" +
        "Une ... Une légende raconte qu'il y a un terrible dragon derrière cette montagne... Je crains le pire..." +
        "Si tu veux rattraper les bandits, tu dois passer par la grotte ! " +
        "Je dois avoir une torche dans ce coffre, essaye de la trouver." +
        "Pour trouver la torche, déplace le contenu du coffre de gauche dans celui de droite." +
        "Une fois que tu verras la torche, clique dessus.", 0, 1);
}

/**
 * Démarre la quête de la boussole après avoir parlé au PNJ
 */
function launchCompassQuest() {
    showTextAndLaunchQuest("Simon", "/ Bienvenue dans la forêt des singes jeune Princesse ! Gagne notre petit jeu" +
        " et nous te donnerons quelque chose d'utile ! /",0, 2);
}
/**
 * lance l'extinction de la torche
 */
function launchLightDown(){
    showTextAndLaunchQuest("","/ Souffle pour éteindre la torche. /",0, 3);
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
	talking = true;
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
	//quest=true;
	talking=false;
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
	talking = true;
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
		talking = false;
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
function showScreenQuest(questId) 
{
    switch(questId) {
        case 1:
            $("#mainZone").hide();
            $("#divTorchQuest").show();
            break;
        case 2:
            $("#mainZone").hide();
            $("#divCompassQuest").show();
            launchDialog(3);
            break;
        case 3:
            $("#mainZone").hide();
            $("#divLightDown").show();
            $("#sortie").show();
            $("#torche").show();
            microphoneSound();
            break;
        case 4:
            $("#mainZone").hide();
            $("#divFightQuest").show();
            // $("#canvasFightDragon").show();
            // $("#EmilieLife").show();
            // $("#DragonLife").show();
            fight();
            lanceQTE();
            break;
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
    soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('Fond','sound/grotte.mp3');
}
function sonDebut(){
    soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('Fond','sound/village.mp3');
}

function sonBois() {
    soundManager.url = 'swf/';
     soundManager.debugMode = true;
     soundManager.play('Fond','sound/woods.mp3');
}

function sonEntreeGrotte() {
    soundManager.url = 'swf/';
     soundManager.debugMode = true;
     soundManager.play('Fond','sound/entreeGrotte.mp3');
}

function sonBoss() {
    soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('Fond','sound/boss.mp3');
}

function sonItemFound() {
    soundManager.url = 'swf/';
    soundManager.debugMode = true;
    soundManager.play('itemFound','sound/itemFound.mp3');
}

chrono();

function chrono(){
    centi++; //incrémentation des dixièmes de 1
    if (centi>9){
        centi=0;secon++
    } //si les dixièmes > 9,
    //on les réinitialise à 0 et on incrémente les secondes de 1
    if (secon>59){
        secon=0;minu++
    }

    setTimeout('chrono()',100);

    $("#chrono").html("Temps : " + minu + " min, " + secon + " sec, " + centi);
}
