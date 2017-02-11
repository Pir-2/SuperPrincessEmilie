/** Création d'un objet map.
 * Renvoie la map à afficher
 *
 * Map 0: Map de départ contenant le chateau
 * Map 1: Map d'un village. Contiendra la quête pour récupérer la torche en parlant à un PNJ
 * Map 2: Map foret. Contiendra les singes pour la quête de la boussole
 * Map 3: Map grotte
 * Map 4: Map montage avec le dragon
 * Map 5: Entrée de la grotte
 * Map 6: Sous sol de la grotte
 * ___________________________
 * |     |      |      | Map3 | Map4 |
 * |Map2 | Map0 | Map1 | Map5 |
 * |_____|______|______|______|
 * @returns {Array}
 */

    var map0 = new Array();
        map0[0] = new Array(0  ,0  ,78 ,79 ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,78 ,79 ,0  ,0  );
        map0[1] = new Array(0  ,0  ,88 ,89 ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,88 ,89 ,0  ,0  );
        map0[2] = new Array(0  ,0  ,98 ,99 ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,98 ,99 ,0  ,0  );
        map0[3] = new Array(13 ,13 ,94 ,95 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,13 ,94 ,95 ,13 ,13 );
        map0[4] = new Array(11 ,11 ,92 ,93 ,11 ,11 ,66 ,11 ,11 ,11 ,11 ,11 ,11 ,66 ,11 ,11 ,92 ,93 ,11 ,11 );
        map0[5] = new Array(11 ,11 ,94 ,95 ,11 ,77 ,76 ,11 ,11 ,11 ,11 ,11 ,11 ,76 ,77 ,11 ,94 ,95 ,11 ,11 );
        map0[6] = new Array(11 ,11 ,94 ,95 ,11 ,87 ,11 ,11 ,11 ,9  ,11 ,11 ,11 ,11 ,87 ,11 ,94 ,95 ,11 ,11 );
        map0[7] = new Array(0  ,0  ,90 ,91 ,0  ,0  ,0  ,0  ,0  ,4  ,0  ,0  ,0  ,0  ,0  ,0  ,90 ,91 ,0  ,0  );
        map0[8] = new Array(12 ,12 ,12 ,12 ,12 ,12 ,12 ,12 ,12 ,4  ,12 ,12 ,12 ,12 ,12 ,12 ,12 ,12 ,12 ,12 );
        map0[9] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,2  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map0[10]= new Array(26 ,0  ,0  ,26 ,0  ,0  ,26 ,0  ,0  ,2  ,0  ,0  ,26 ,0  ,0  ,26 ,0  ,0  ,26 ,0  );
        map0[11]= new Array(36 ,0  ,0  ,36 ,0  ,0  ,36 ,0  ,0  ,2  ,0  ,0  ,36 ,0  ,0  ,36 ,0  ,0  ,36 ,0  );
        map0[12]= new Array(2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  );
        map0[13]= new Array(2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  ,2  );
        map0[14]= new Array(26 ,0  ,0  ,26 ,0  ,0  ,26 ,0  ,2  ,2  ,2  ,0  ,26 ,0  ,0  ,26 ,0  ,0  ,26 ,0  );
        map0[15]= new Array(36 ,0  ,0  ,36 ,0  ,0  ,36 ,0  ,2  ,2  ,2  ,0  ,36 ,0  ,0  ,36 ,0  ,0  ,36 ,0  );
        map0[16]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map0[17]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map0[18]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map0[19]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,2  ,2  ,2  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );

    var map1 = new Array();
        map1[0] =  new Array(43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 , 43 , 42 );
        map1[1] =  new Array(53 , 52 , 42 , 52 , 42 , 51 , 50 , 51 , 50 , 51 , 50 , 51 , 50 , 43 , 42 , 43 , 42 , 43 , 42 , 52 );
        map1[2] =  new Array(43 , 42 , 52 , 42 , 51 , 0  , 60 , 61 , 61 , 61 , 61 , 61 , 62 , 50 , 52 , 53 , 43 , 42 , 43 , 42 );
        map1[3] =  new Array(53 , 52 , 42 , 51 , 0  , 0  , 70 , 71 , 71 , 71 , 71 , 71 , 72 , 0  , 50 , 51 , 50 , 43 , 42 , 52 );
        map1[4] =  new Array(43 , 42 , 52 , 41 , 0  , 0  , 80 , 81 , 81 , 81 , 81 , 81 , 82 , 0  , 40 , 41 , 0  , 50 , 43 , 42 );
        map1[5] =  new Array(53 , 52 , 42 , 51 , 0  , 0  , 44 , 45 , 44 , 44 , 44 , 45 , 44 , 0  , 50 , 51 , 0  , 0  , 50 , 52 );
        map1[6] =  new Array(43 , 42 , 51 , 0  , 26 , 28 , 54 , 55 , 54 , 7  , 54 , 55 , 54 , 0  , 32 , 32 , 0  , 0  , 0  , 50 );
        map1[7] =  new Array(50 , 51 , 24 , 0  , 36 , 0  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 0  , 33 , 33 , 0  , 0  , 0  , 25 );
        map1[8] =  new Array(2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  );
        map1[9] =  new Array(2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 34 , 35 , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  , 2  );
        map1[10] = new Array(41 , 40 , 41 , 0  , 0  , 0  , 2  , 2  , 2  , 2  , 2  , 63 , 64 , 64 , 64 , 65 , 0  , 0  , 0  , 40 );
        map1[11] = new Array(52 , 53 , 51 , 60 , 61 , 62 , 2  , 2  , 2  , 2  , 2  , 73 , 74 , 74 , 74 , 75 , 0  , 0  , 40 , 42 );
        map1[12] = new Array(42 , 43 , 41 , 80 , 81 , 82 , 29 , 0  , 2  , 2  , 0  , 83 , 84 , 84 , 84 , 85 , 0  , 40 , 42 , 43 );
        map1[13] = new Array(52 , 53 , 51 , 54 , 7  , 54 , 29 , 0  , 2  , 2  , 0  , 44 , 45 , 44 , 45 , 44 , 0  , 50 , 52 , 53 );
        map1[14] = new Array(42 , 43 , 41 , 0  , 2  , 2  , 2  , 2  , 2  , 2  , 0  , 54 , 55 , 7  , 55 , 54 , 0  , 40 , 42 , 43 );
        map1[15] = new Array(52 , 53 , 52 , 41 , 0  , 0  , 0  , 0  , 2  , 2  , 2  , 2  , 2  , 2  , 37 , 0  , 0  , 50 , 52 , 53 );
        map1[16] = new Array(42 , 43 , 42 , 51 , 40 , 41 , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 0  , 40 , 42 , 43 );
        map1[17] = new Array(52 , 53 , 52 , 41 , 50 , 51 , 40 , 41 , 40 , 41 , 40 , 41 , 0  , 0  , 0  , 0  , 40 , 42 , 52 , 53 );
        map1[18] = new Array(42 , 43 , 42 , 43 , 41 , 40 , 42 , 43 , 42 , 43 , 42 , 43 , 41 , 40 , 41 , 40 , 42 , 43 , 42 , 43 );
        map1[19] = new Array(52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 , 52 , 53 );

    var map2 = new Array();
        map2[0] = new Array(52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 ,52 ,53 );
        map2[1] = new Array(42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 );
        map2[2] = new Array(52 ,53 ,52 ,53 ,52 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 ,43 ,42 );
        map2[3] = new Array(42 ,43 ,42 ,43 ,42 ,51 ,50 ,51 ,50 ,51 ,50 ,51 ,50 ,51 ,50 ,51 ,50 ,52 ,42 ,52 );
        map2[4] = new Array(52 ,53 ,52 ,53 ,52 ,41 ,22 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,40 ,42 ,52 ,42 );
        map2[5] = new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,50 ,52 ,42 ,52 );
        map2[6] = new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,40 ,41 ,40 ,41 ,40 ,41 ,0  ,0  ,40 ,42 ,52 ,42 );
        map2[7] = new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,50 ,51 ,50 ,51 ,50 ,51 ,0  ,0  ,50 ,51 ,50 ,51 );
        map2[8] = new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,23 ,0  ,0  ,0  ,40 ,41 ,0  ,0  ,0  ,0  ,0  ,0  );
        map2[9] = new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,0  ,0  ,0  ,56 ,50 ,51 ,0  ,0  ,0  ,0  ,0  ,0  );
        map2[10]= new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,0  ,0  ,0  ,56 ,40 ,41 ,0  ,0  ,40 ,41 ,40 ,41 );
        map2[11]= new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,23 ,0  ,0  ,0  ,50 ,51 ,0  ,0  ,50 ,52 ,42 ,52 );
        map2[12]= new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,40 ,41 ,40 ,41 ,40 ,41 ,0  ,0  ,40 ,42 ,52 ,42 );
        map2[13]= new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,50 ,51 ,50 ,51 ,50 ,51 ,0  ,0  ,50 ,52 ,42 ,52 );
        map2[14]= new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,40 ,42 ,52 ,42 );
        map2[15]= new Array(42 ,43 ,42 ,43 ,42 ,51 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,50 ,52 ,42 ,52 );
        map2[16]= new Array(52 ,53 ,52 ,53 ,52 ,41 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,40 ,42 ,52 ,42 );
        map2[17]= new Array(42 ,43 ,42 ,43 ,42 ,52 ,41 ,40 ,41 ,0  ,23 ,23 ,0  ,40 ,41 ,40 ,42 ,52 ,42 ,52 );
        map2[18]= new Array(52 ,53 ,52 ,53 ,52 ,42 ,52 ,42 ,52 ,41 ,40 ,41 ,40 ,42 ,52 ,42 ,52 ,42 ,52 ,42 );
        map2[19]= new Array(42 ,43 ,42 ,43 ,42 ,52 ,42 ,52 ,42 ,52 ,42 ,52 ,42 ,52 ,42 ,52 ,42 ,52 ,42 ,52 );

    /**
     * Labyrinthe RDC
     * @type {Array}
     */
    var map3 = new Array();
        map3[0] = new Array(18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,17 );
        map3[1] = new Array(3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 );
        map3[2] = new Array(17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 );
        map3[3] = new Array(17 ,18 ,17 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,17 ,18 ,17 ,18 ,18 ,18 ,18 ,18 ,18 ,17 );
        map3[4] = new Array(17 ,3  ,17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,17 ,3  ,3  ,3  ,3  ,3  ,3  ,17 );
        map3[5] = new Array(17 ,46 ,17 ,3  ,17 ,17 ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,17 );
        map3[6] = new Array(17 ,3  ,17 ,3  ,17 ,18 ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,18 ,18 ,18 ,17 ,3  ,17 );
        map3[7] = new Array(17 ,3  ,17 ,3  ,17 ,46 ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,3  ,3  ,3  ,17 ,3  ,17 );
        map3[8] = new Array(17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 ,3  ,17 ,3  ,17 );
        map3[9] = new Array(17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,18 ,17 ,3  ,17 ,3  ,17 );
        map3[10]= new Array(17 ,3  ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,3  ,17 ,3  ,17 ,17 ,39 ,17 ,3  ,17 ,3  ,17 );
        map3[11]= new Array(17 ,3  ,17 ,3  ,17 ,3  ,18 ,18 ,17 ,3  ,17 ,3  ,18 ,18 ,3  ,17 ,3  ,17 ,3  ,17 );
        map3[12]= new Array(17 ,3  ,17 ,3  ,17 ,3  ,3  ,39 ,17 ,3  ,17 ,3  ,3  ,3  ,3  ,17 ,3  ,17 ,3  ,17 );
        map3[13]= new Array(17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,17 ,3  ,17 );
        map3[14]= new Array(17 ,3  ,17 ,3  ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,17 ,18 ,18 ,18 ,18 ,3  ,17 ,3  ,17 );
        map3[15]= new Array(17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,17 );
        map3[16]= new Array(17 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,17 ,3  ,3  ,17 ,3  ,17 ,17 ,17 ,3  ,17 ,3  ,17 );
        map3[17]= new Array(17 ,18 ,18 ,18 ,18 ,18 ,18 ,3  ,17 ,3  ,3  ,17 ,3  ,18 ,18 ,17 ,3  ,17 ,3  ,17 );
        map3[18]= new Array(17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,3  ,17 ,3  ,3  ,39 ,17 ,3  ,3  ,3  ,17 );
        map3[19]= new Array(17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,3  ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 );

    /**
     * Labyrinthe sous sol
     * @type {Array}
     */
    var map6 = new Array();
        map6[0] = new Array(17 ,18 ,18 ,17 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,17 );
        map6[1] = new Array(17 ,3  ,3  ,17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 );
        map6[2] = new Array(17 ,3  ,17 ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,17 );
        map6[3] = new Array(17 ,3  ,18 ,18 ,3  ,17 ,3  ,17 ,18 ,18 ,18 ,18 ,18 ,18 ,17 ,18 ,18 ,18 ,3  ,17 );
        map6[4] = new Array(17 ,3  ,3  ,3  ,3  ,17 ,3  ,17 ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,3  ,3  ,3  ,17 );
        map6[5] = new Array(17 ,17 ,3  ,17 ,17 ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 ,3  ,17 ,3  ,17 ,17 ,17 ,17 );
        map6[6] = new Array(17 ,17 ,3  ,17 ,18 ,18 ,3  ,17 ,3  ,17 ,18 ,18 ,17 ,3  ,17 ,3  ,18 ,18 ,18 ,17 );
        map6[7] = new Array(17 ,18 ,3  ,17 ,3  ,3  ,3  ,17 ,3  ,17 ,3  ,3  ,17 ,3  ,17 ,3  ,3  ,3  ,3  ,17 );
        map6[8] = new Array(17 ,3  ,3  ,17 ,17 ,17 ,3  ,18 ,3  ,17 ,3  ,17 ,17 ,3  ,17 ,17 ,17 ,17 ,3  ,17 );
        map6[9] = new Array(17 ,3  ,17 ,17 ,17 ,17 ,3  ,3  ,3  ,17 ,3  ,18 ,18 ,3  ,17 ,17 ,18 ,17 ,3  ,17 );
        map6[10]= new Array(17 ,3  ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,3  ,3  ,3  ,17 ,38 ,3  ,17 ,3  ,17 );
        map6[11]= new Array(17 ,3  ,17 ,18 ,18 ,18 ,18 ,17 ,17 ,18 ,17 ,17 ,17 ,17 ,17 ,17 ,3  ,18 ,3  ,17 );
        map6[12]= new Array(17 ,3  ,17 ,3  ,3  ,3  ,3  ,17 ,38 ,3  ,17 ,18 ,18 ,18 ,18 ,17 ,3  ,3  ,3  ,17 );
        map6[13]= new Array(17 ,3  ,17 ,17 ,17 ,17 ,3  ,17 ,17 ,3  ,17 ,3  ,3  ,3  ,3  ,17 ,3  ,17 ,3  ,17 );
        map6[14]= new Array(17 ,3  ,18 ,18 ,18 ,18 ,3  ,18 ,18 ,3  ,17 ,3  ,17 ,17 ,3  ,17 ,3  ,17 ,3  ,17 );
        map6[15]= new Array(17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,3  ,17 ,17 ,3  ,17 ,3  ,17 ,3  ,17 );
        map6[16]= new Array(17 ,17 ,17 ,17 ,17 ,17 ,3  ,17 ,17 ,17 ,17 ,3  ,17 ,17 ,3  ,17 ,3  ,17 ,3  ,17 );
        map6[17]= new Array(17 ,18 ,18 ,18 ,18 ,18 ,3  ,18 ,18 ,18 ,18 ,3  ,17 ,3  ,3  ,17 ,3  ,17 ,3  ,17 );
        map6[18]= new Array(17 ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,3  ,17 ,17 ,17 ,38 ,3  ,17 ,3  ,17 );
        map6[19]= new Array(17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 );

    /**
     * Sortie du labyrinthe
     * @type {Array}
     */
    var map4 = new Array();
        map4[0] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 );
        map4[1] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,17 );
        map4[2] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 ,18 );
        map4[3] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[4] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[5] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[6] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[7] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[8] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[9] = new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[10]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[11]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[12]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,47 ,48 ,49 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[13]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,57 ,58 ,59 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[14]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,18 ,17 ,67 ,68 ,69 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[15]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,17 ,17 ,17 ,17 ,17 ,17 ,17 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[16]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,18 ,17 ,17 ,17 ,17 ,17 ,18 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[17]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,18 ,17 ,17 ,17 ,18 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[18]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,18 ,18 ,18 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );
        map4[19]= new Array(16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 ,16 );

    var map5 = new Array();
        map5[0] = new Array(0  ,0  ,0  ,0  ,0  ,17 ,17 ,17 ,17 ,2  ,2  ,17 ,17 ,17 ,17 ,0  ,0  ,0  ,0  ,0  );
        map5[1] = new Array(0  ,0  ,0  ,0  ,0  ,18 ,17 ,17 ,17 ,2  ,2  ,17 ,17 ,17 ,18 ,0  ,0  ,0  ,0  ,0  );
        map5[2] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,18 ,18 ,17 ,2  ,2  ,17 ,18 ,18 ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[3] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,18 ,2  ,2  ,18 ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[4] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[5] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[6] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[7] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[8] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[9] = new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[10]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[11]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[12]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[13]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[14]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[15]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[16]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[17]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[18]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );
        map5[19]= new Array(0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  ,0  );

    var maps = [map0, map1, map2, map3, map4, map5, map6];

    function Map(id) {
        this.id = id;
        this.map = maps[id];

        this.hauteur = 20;
        this.largeur = 20;
    }






