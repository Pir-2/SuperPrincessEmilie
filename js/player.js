function Player() {
    //position du joueur sur la map
    this.position_x = 9; //Position de départ
    this.position_y = 7;

    /*
     * ===========Gestion du sprite========
     * Il existe 12 sprite du joueur
     * regard définit le numéro du sprite utilisé
     * ----------------------------------*
     *          #       pas G      pas D *
     * bas      1       2          0     *
     * gauche   4       5          3     *
     * droite   7       8          6     *
     * haut     10      9          11    *
     * ----------------------------------*
     * widht et height définissent la dimension d'un sprite du joueur
     * sprite contient l'image contenant l'ensemble des sprites du joueur
     * x et y contienent les coordonnées de chaque sprite en fonction de son numéro (coordonnée du point en haut a gauche du sprite)
     */
    this.regard = 1;
    this.width = 32;
    this.height = 48;
    this.sprite = document.getElementById("player");
    this.x = new Array(0,this.width,2*this.width,0,this.width,2*this.width,0,this.width,2*this.width,0,this.width,2*this.width);
    this.y = new Array(0,0,0,this.height,this.height,this.height,this.height*2,this.height*2,this.height*2,this.height*3,this.height*3,this.height*3);
    this.mouvement = false;
    this.vitesse=vitessemax;
}

function AnimationHaut()
{
    var deplacement = 1;
    if (player.position_y > 0) {
        if (tileAvailable.includes(map.map[player.position_y - 1][player.position_x]))
        {
            if (map.map[player.position_y - 1][player.position_x] === 7)
            {
                enterHouse(map.id, player.position_x, player.position_y - 1);
            }
            player.position_y--;
        }
        else
        {
            deplacement=0;
        }
    }
    else
    {
        mapTop(map.id)
    }
    setTimeout(function(){player.regard=10;DessinerMouvement(0,32*deplacement);player.mouvement=true;}, 0);
    setTimeout(function(){player.regard=9;DessinerMouvement(0,24*deplacement);}, 1*player.vitesse);
    setTimeout(function(){player.regard=10;DessinerMouvement(0,16*deplacement);}, 2*player.vitesse);
    setTimeout(function(){player.regard=11;DessinerMouvement(0,8*deplacement);}, 3*player.vitesse);
    setTimeout(function()
    {
        player.regard=10;
        DessinerMouvement(0,0);
        if(kH===true)
        {
            AnimationHaut();
        }
        else
        {
            if(kG===true)
            {
                AnimationGauche();
            }
            else
            {
                if(kD===true)
                {
                    AnimationDroite();
                }
                else
                {
                    if(kB===true)
                    {
                        AnimationBas();
                    }
                    else
                    {
                        player.mouvement=false;
                    }
                }
            }
        }
    }, 4*player.vitesse);
}
function AnimationGauche()
{
    var deplacement = 1;
    if (tileAvailable.includes(map.map[player.position_y][player.position_x - 1]))
    {
        if (player.position_x > 0)
        {
            player.position_x--;
        }
    }
    else
    {
        deplacement=0;
        if (player.position_x === 0)
        {
            //Changement de map
            mapLeft(map.id)
        }
    }
    setTimeout(function(){player.regard=4;DessinerMouvement(32*deplacement,0);player.mouvement=true;}, 0);
    setTimeout(function(){player.regard=5;DessinerMouvement(24*deplacement,0);}, 1*player.vitesse);
    setTimeout(function(){player.regard=4;DessinerMouvement(16*deplacement,0);}, 2*player.vitesse);
    setTimeout(function(){player.regard=3;DessinerMouvement(8*deplacement,0);}, 3*player.vitesse);
    setTimeout(function()
    {
        player.regard=4;
        DessinerMouvement(0,0);
        if(kG===true)
        {
            AnimationGauche();
        }
        else
        {
            if(kH===true)
            {
                AnimationHaut();
            }
            else
            {
                if(kD===true)
                {
                    AnimationDroite();
                }
                else
                {
                    if(kB===true)
                    {
                        AnimationBas();
                    }
                    else
                    {
                        player.mouvement=false;
                    }
                }
            }
        }
    }, 4*player.vitesse);
}
function AnimationBas()
{
    var deplacement = 1;
    if (player.position_y < 19)
    {
        if (tileAvailable.includes(map.map[player.position_y + 1][player.position_x]))
        {
            if (map.map[player.position_y + 1][player.position_x] === 6)
            {
                leaveHouse();
            }
            if (player.position_y < map.hauteur - 1) player.position_y++;
        }
        else
        {
            deplacement=0;
        }
    }
    else {
        mapBottom(map.id);
    }
    setTimeout(function(){player.regard=1;DessinerMouvement(0,-32*deplacement);player.mouvement=true;}, 0);
    setTimeout(function(){player.regard=2;DessinerMouvement(0,-24*deplacement);}, 1*player.vitesse);
    setTimeout(function(){player.regard=1;DessinerMouvement(0,-16*deplacement);}, 2*player.vitesse);
    setTimeout(function(){player.regard=0;DessinerMouvement(0,-8*deplacement);}, 3*player.vitesse);
    setTimeout(function()
    {
        player.regard=1;
        DessinerMouvement(0,0);
        if(kB===true)
        {
            AnimationBas();
        }
        else
        {
            if(kH===true)
            {
                AnimationHaut();
            }
            else
            {
                if(kG===true)
                {
                    AnimationGauche();
                }
                else
                {
                    if(kD===true)
                    {
                        AnimationDroite();
                    }
                    else
                    {
                        player.mouvement=false;
                    }
                }
            }
        }
    }, 4*player.vitesse);
}
function AnimationDroite()
{

    var deplacement = 1;
    if (tileAvailable.includes(map.map[player.position_y][player.position_x + 1]))
    {
        player.position_x++;
    }
    else
    {
        deplacement=0;
        if (player.position_x === map.largeur - 1)
        {
            //Changement de map
            mapRight(map.id)
        }
    }
    setTimeout(function(){player.regard=7;DessinerMouvement(-32*deplacement,0);player.mouvement=true;}, 0);
    setTimeout(function(){player.regard=8;DessinerMouvement(-24*deplacement,0);}, 1*player.vitesse);
    setTimeout(function(){player.regard=7;DessinerMouvement(-16*deplacement,0);}, 2*player.vitesse);
    setTimeout(function(){player.regard=6;DessinerMouvement(-8*deplacement,0);}, 3*player.vitesse);
    setTimeout(function()
    {
        player.regard=7;
        DessinerMouvement(0,0);
        if(kD===true)
        {
            AnimationDroite();
        }
        else
        {
            if(kH===true)
            {
                AnimationHaut();
            }
            else
            {
                if(kG===true)
                {
                    AnimationGauche();
                }
                else
                {
                    if(kB===true)
                    {
                        AnimationBas();
                    }
                    else
                    {
                        player.mouvement=false;
                    }
                }
            }
        }
    }, 4*player.vitesse);
}


/**
 * Dessine la map et le personnage
 * @constructor
 */
function DessinerMouvement(decalagex, decalagey) {
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
    ctx.drawImage(player.sprite,player.x[player.regard],player.y[player.regard],player.width,player.height,player.position_x*tiles_dimension+decalagex,player.position_y*tiles_dimension-player.height+tiles_dimension+decalagey,player.width,player.height);
    if(map.id == 3 ||map.id == 6){
        //drawHalo(player.position_x,player.position_y);
    }
}