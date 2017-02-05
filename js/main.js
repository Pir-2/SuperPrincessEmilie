var map = null;

var tileset = null;
var tiles_dimension = 32;
var tileset_width = 30;
var tileset_height = 16;
//position x de la tile en fonction de son numéro
var tileset_x = new Array();
//position y de la tile en fonction de son numéro
var tileset_y = new Array();

/**
 * Variables concernant le joueur
 */
var player = null;
var player_x = null;
var player_y = null;
var player_width = 32;
var player_height = 48;
var player_position_x = 5; //Position de départ
var player_position_y = 5;
var player_regard = 2;

/**
 * Booléen indiquant si le joueur possède les items nécessaires pour entrer dans la grotte
 */
var haveTorch = false;
var haveCompass = false;

/**
 * Saisir dans ce tableau l'id des tiles ou le personnage peut se déplacer.
 * 37: Chemin avec herbe en haut
 * 66: Chemin avec herbe à gauche
 * 67: Chemin
 * 68: Chemin avec herbe à droite
 * 72: Plancher de maison
 * 97: Chemin avec herve en bas
 * 463: Porte ouverte (Tile à modifier)
 */
var tileAvailable = [270, 8, 7, 37, 66, 67, 68,72, 97, 252, 253, 463];

/**
 * Saisir dans ce tableau l'id des tiles représentant un PNJ à qui parler
 * 119: -
 */
var tileToTalk = [119];

$(document).ready(function() {
    initTileSet();

    map = new Map(0);

    initPlayer();

    Dessiner();

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
 * Initialisation du joueur
 */
function initPlayer() {
//image du joueur
//le joueur peut être plus grand qu'une tile, sa position est ajusté
    player = document.getElementById("player");
//hauteur et largeur du sprite du joueur

//position x du joueur en fonction de son regard
    player_x = new Array(player_width,player_width,player_width,player_width);
//position y du joueur en fonction de son
    player_y = new Array(player_height*3,player_height,0,player_height*2);
}

function Dessiner() {
    //==================================================Affichage====================================================
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    //on dessine la map sur le canevass
    for(var y=0; y<map.hauteur; y++)
    {
        for(var x=0; x<map.largeur; x++)
        {
            ctx.drawImage(tileset,tileset_x[map.map[y][x]],tileset_y[map.map[y][x]],tiles_dimension,
                tiles_dimension,x*tiles_dimension,y*tiles_dimension,tiles_dimension,tiles_dimension);
        }
    }
    //on dessine le joueur
    ctx.drawImage(player,player_x[player_regard],player_y[player_regard],player_width,player_height,player_position_x*tiles_dimension,player_position_y*tiles_dimension-player_height+tiles_dimension,player_width,player_height);
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
        player_regard=0;

        if(player_position_y > 0) {
            if(tileAvailable.includes(map.map[player_position_y-1][player_position_x])) {
                if(map.map[player_position_y-1][player_position_x] === 463) {
                    enterHouse();
                }
               player_position_y--;
            }
        } else {
            mapTop(map.id)
        }
    }
    //gauche
    if(e.keyCode === 37)
    {
        player_regard=1;

        if(tileAvailable.includes(map.map[player_position_y][player_position_x-1])) {
            if(player_position_x>0)player_position_x--;
        } else {
            if(player_position_x === 0) {
                //Changement de map
                mapLeft(map.id)
            }
        }
    }
    //bas
    if(e.keyCode === 40)
    {
        player_regard=2;

        if(tileAvailable.includes(map.map[player_position_y+1][player_position_x])) {
            if(map.map[player_position_y+1][player_position_x] === 463) {
                leaveHouse();
            }
            if(player_position_y<map.hauteur-1)player_position_y++;
        }
    }
    //droite
    if(e.keyCode === 39)
    {
        player_regard=3;

        if(tileAvailable.includes(map.map[player_position_y][player_position_x+1])) {
            player_position_x++;
        } else {
            if(player_position_x === map.largeur-1) {
                //Changement de map
                mapRight(map.id)
            }
        }
    }

    //Espace
    if(e.keyCode === 32)
    {
        switch(player_regard) {
            case 0:
                if(tileToTalk.includes(map.map[player_position_y-1][player_position_x])) {
                    startToTalk(map.map[player_position_y-1][player_position_x]);
                } break;
            case 1:
                if(tileToTalk.includes(map.map[player_position_y][player_position_x-1])) {
                    startToTalk(map.map[player_position_y][player_position_x-1]);
                } break;
            case 2:
                if(tileToTalk.includes(map.map[player_position_y+1][player_position_x])) {
                    startToTalk(map.map[player_position_y+1][player_position_x]);
                } break;
            case 3:
                if(tileToTalk.includes(map.map[player_position_y][player_position_x+1])) {
                    startToTalk(map.map[player_position_y][player_position_x+1]);
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

    Dessiner();
}

/**
 * FAIRE UNE FONCTION GENERIQUE A TOUTES LES MAISONS ?
 * Entre dans la maison avec la porte ouverte
 * Attention ! Si plus d'une maison avec la porte ouverte, refaire le code
 * Idem si on déplace la maison.
 */
function enterHouse() {
    map = new Map(5);
    player_position_x = 9;
    player_position_y = 15;
}

function leaveHouse() {
    map = new Map(0);
    player_position_x = 4;
    player_position_y = 8;
}

/**
 * Change de map lorsque le personnage est le plus à droite d'une map
 * @param id de la map actuelle
 */
function mapRight(id) {
    switch(id) {
        case 2:
            map = new Map(0);
            player_position_x = 0;
            break;
        case 0:
            map = new Map(1);
            player_position_x = 0;
            break;
        case 3:
            map = new Map(4);
            player_position_x = 0;
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
            player_position_x = 19;
            break;
        case 0:
            map = new Map(2);
            player_position_x = 19;
            break;
    }
}

/**
 * Change de map lorsque le personnage est le plus en haut d'une map
 * @param id de la map actuelle
 */
function mapTop(id) {
    switch(id) {
        case 1:
            if(haveTorch && haveCompass) {
                alert("Tu es sur le point d'entrer dans la grotte ! Es-tu prêt ?");
                map = new Map(3);
                player_position_y = 19;
                break;
            } else {
                alert("Tu es sur le point d'entrer dans la grotte ! " +
                    "C'est trop dangereux sans des équipements pour te repérer !");
                player_regard=2;
                player_position_y++;
            }
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
    }
}

/**
 * Démarre la quête de la torche après avoir parlé au PNJ
 * Affiche la box de dialogue, lance le texte et affiche la fenetre de minijeu
 */
function launchTorchQuest() {
    $(".box").show();

    showText("Tortue géniale", "Des marchands ont vu un groupe de bandits emmener le roi de l'autre côté de la montagne !" +
        "Une ... Une légende raconte qu'il y a un terrible dragon derrière cette montagne... Je crains le pire..." +
        "Si tu veux rattraper les bandits, tu dois passer par la grotte ! " +
        "Je dois avoir une torche dans ce coffre, essaye de la trouver. /" +
        "Pour trouver la torche, déplace le contenu du coffre de gauche dans celui de droite." +
        "Une fois que tu verras la torche, clique dessus.", 0, 1);
}

/**
 * Démarre la quête de la boussole après avoir parlé au PNJ
 */
function launchMonkeyQuest() {
    var c = document.getElementById("divTorchQuest");
    var ctx = c.getContext("2d");

    var img = new Image();
    img.src = 'img/singe.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
    }

    // $(".box").show();
    //
    // Speak("Simon", "Bonjour jeune princesse ! Que fais-tu dans cette foret ? \n" +
    //     "Tu veux un conseil pour te diriger dans la grotte ? Le mieux serait d'avoir cette boussole ! \n" +
    //     "Mmh... Je suis prêt à te la donner seulement si tu réussis mon petit jeu. \n" +
    //     "Essaye de retenir les combinaisons et de les reproduire. C'est parti !");
}

/**
 * Fonction de dialogue
 * A chaque "/" dans le texte, le contenu s'effacera pour faire de la place
 * @param pnj: Nom de la personne qui parle
 * @param message: Dialogue
 * @param index: Mettre à 0 (Utilisé pour la récursivité)
 * @param questId: Id de la quête à afficher à la fin du dialogue
 */
var showText = function (pnj, message, index, questId) {
    if (index < message.length) {
        $("#name").html(pnj);

        if(message[index] === "/") {
            $("#message").html("");
            index++;
        } else {
            $("#message").append(message[index++]);
        }

        setTimeout(function () { showText(pnj, message, index, questId); }, 50);
    } else {
        showScreenQuest(questId);
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
    $(".box").hide();

    switch(questId) {
        case 1:
            $("#myCanvas").hide();
            $("#divTorchQuest").show();
        default:
            return;
    }
}
