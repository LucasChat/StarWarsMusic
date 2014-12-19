var imgPlayer     = new Image();
    imgLaser1     = new Image(),
    imgLaser2     = new Image(),
    imgEnemy1     = new Image(),
    imgEnemy2     = new Image(),
    imgEnemy3     = new Image(),
    imgEnemy4     = new Image(),
    imgBackground = new Image(),
    imgGreenBonus = new Image(),
    imgBlueBonus  = new Image(),
    imgRedBonus   = new Image();

var choosePlayer;

// Choix aléatoire des background
imgBackground.onerror = handleImageError;
switch(chooseBackground) {
    case 0:
        imgBackground.src = "src/img/tatooine.png";
        break;
    case 1:
        imgBackground.src = "src/img/hoth.png";
        break;
    case 2:
        imgBackground.src = "src/img/mustafar.png";
        break;
    case 3:
        imgBackground.src = "src/img/coruscante.png";
        break;
    case 4:
        imgBackground.src = "src/img/endor.png";
        break;
    case 5:
        imgBackground.src = "src/img/nabooBackground.png";
        break;
}

// Récupération du vaisseau sélectionné
function choosePlayerFunction()
{
    if(selected_spaceship.xwing) choosePlayer = 3;
    if(selected_spaceship.naboo) choosePlayer = 2;
    if(selected_spaceship.millenium) choosePlayer = 1;
    if(selected_spaceship.interceptor) choosePlayer = 0;
}

// Chargement des images
function init() 
{
    choosePlayerFunction();
    
    imgPlayer.onerror = handleImageError;
    switch(choosePlayer) {
    case 0:
        imgPlayer.src = "src/img/Interceptor3Sprites.png";
        break;
    case 1:
        imgPlayer.src = "src/img/MilleniumFalcon3Sprites.png";
        break;
    case 2:
        imgPlayer.src = "src/img/Naboo3Sprites.png";
        break;
    case 3:
        imgPlayer.src = "src/img/XWing3Sprites.png";
        break;  
	}
    
    if(!replay) // On ne charge les image que la première fois.
    {
        imgLaser1.onerror     = handleImageError;
        imgLaser1.src         = "src/img/Laser_jedi.png";

        imgLaser2.onerror     = handleImageError;
        imgLaser2.src         = "src/img/Laser_enemy.png";

        imgEnemy1.onerror     = handleImageError;
        imgEnemy1.src         = "src/img/GauntletFighterGame.png";

        imgEnemy2.onerror     = handleImageError;
        imgEnemy2.src         = "src/img/GunshipDroid.png";

        imgEnemy3.onerror     = handleImageError;
        imgEnemy3.src         = "src/img/intercepteurTIE.png";

        imgEnemy4.onerror     = handleImageError;
        imgEnemy4.src         = "src/img/VultureDroid.png";

        imgGreenBonus.onerror = handleImageError;
        imgGreenBonus.src     = "src/img/greenBonus.png";

        imgBlueBonus.onerror = handleImageError;
        imgBlueBonus.src     = "src/img/blueBonus.png";

        imgRedBonus.onload  = handleImageLoad;
        imgRedBonus.onerror = handleImageError;
        imgRedBonus.src     = "src/img/redBonus.png";
    }
    else 
    {
        stage.removeChild(bmpPlayer);
        createPlayer();
        resetGame();
    }
}

// Une fois la dernière image chargée, on lance l'algorithme du jeu
function handleImageLoad(e) 
{
    startGame();
}

// Affiche une alerte si problème de chargement d'image
function handleImageError(e) {
    console.log("Error Loading Image : " + e.target.src);
}