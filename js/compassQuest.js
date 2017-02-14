var serverCombination = [];
var speed = 800;
/**
 * Tableau contenant les boutons et leur couleur temporaire respective
 */
var buttonTab = new Array();
buttonTab[0] = new Array("greenButton", "#a1fe68");
buttonTab[1] = new Array("yellowButton", "#f4fe9b");
buttonTab[2] = new Array("redButton", "#fe7662");
buttonTab[3] = new Array("blueButton", "#6690fe");



function launchDialog(iteration) {
	quest=true;
    if(iteration === 3) {
        showText("Simon", "/ Essaye de suivre le rythme ! Reproduis les combinaisons de couleurs ! Tu es prête ? C'est parti !",0);

        setTimeout(function() {
            startPhase(800, 3);
        }, 6000)
    } else if (iteration == 4) {
        showText("Simon", "/ Tu es forte ! Et si je vais plus vite ?",0);

        setTimeout(function() {
            startPhase(700, 4);
        }, 4000)
    } else {
        showText("Simon", "/ Impressionnant ! Et si je tape encore plus vite ?",0);

        setTimeout(function() {
            startPhase(600, 5);
        }, 4000)
    }
}

function startPhase(speed, iteration) {
    setTimeout(function () {
        if(iteration > 0) {
            var number = Math.floor(Math.random() * 3) + 0;
            var tempTab = buttonTab[number];

            serverCombination.push(tempTab[0]);
            iteration--;
            flash(tempTab[0], tempTab[1], speed, iteration);
        } else {
            playerTurn();
            return;
        }
    }, 200);
}

/**
 *
 */
function flash(element, tempColor, speed, iteration) {
    var oldBackground = hexc($("#"+element).css('backgroundColor'));
    $("#"+element).css("background-color", tempColor);

    setTimeout(function () {
        $("#"+element).css("background-color", oldBackground);
        startPhase(speed, iteration);
    }, speed);
}

/**
 * Récupère une couleur hexadécimal à partir d'une couleur RGB
 * @param colorval
 * @returns {string}
 */
function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}

function playerTurn() {
    showText("Simon", "/ A toi de jouer !",0);
    $(".buttonGame").prop('disabled', false);
}

var clickCount = 0;

$(document).ready(function() {
    var iteration = 3;
    $(".buttonGame").click(function() {

        if(serverCombination[clickCount] != this.id) {
            showText("Simon", "/ Perdu ! Reviens me voir quand tu auras le rythme dans la peau!",0);
			quest = false;
            $("#myCanvas").show();
            $("#divCompassQuest").hide();
            return;
        }

        clickCount++;
        if(clickCount === iteration) {
            if(iteration<5) {
                serverCombination = [];
                clickCount = 0;
                iteration++;

                launchDialog(iteration);
                $(".buttonGame").prop('disabled', true);
            } else {
                showText("Simon", "/ INCROYABLE ! Je suis forcé de te récompenser après avoir admiré ton talent." +
                    "J'ai entendu dire que tu souhaitais traverser la grotte.. Voila qui devrait t'aider ! " +
                    "/ Vous avez obtenu la BOUSSOLE !",0);

                haveCompass = true;

				quest = false;
                $("#myCanvas").show();
                $("#divCompassQuest").hide();
                $("#boussoleInventaire").show();
            }
        }
    });






    $("#divCompassQuest").css("background-image", "url(img/compassQuest/fond3.png");
    var fond = ["fond1.png", "fond2.png", "fond3.png", "fond4.png", "fond5.png", "fond6.png", "fond7.png"];
    var i = 0;
    var inverse = false;

    //----------------- Mouvement des singes ---------------------//
    explode();

    function explode(){
        if(i<6 & inverse === false) {
            i++;
        } else {
            inverse = true;

            if(i === 1) {
                inverse = false;
            }
            i--;
        }

        $("#divCompassQuest").css("background-image", "url(img/compassQuest/"+fond[i]+")");
        setTimeout(explode, 50);
    }
});