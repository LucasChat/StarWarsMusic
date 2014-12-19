var bmpPlayerLasers = [],
    bmpEnemyLasers = [],
    bmpLaser;
//Creation d'un laser
function createNewLaser(player, enemy, shift)
{
	if(player) var img = imgLaser1
	else var img = imgLaser2
	var spriteSheet = new createjs.SpriteSheet({
        // Image à utiliser (choisit en fonction de joueur/ennemi)
	    images: [img],
	    // Définition des frames de l'image
	    frames: {width: img.width, height: img.height, regX: img.width/2, regY: img.height/2}, 
    });
	
    // Utilisation du constructeur EaselJS
	bmpLaser = new createjs.BitmapAnimation(spriteSheet);
 
    bmpLaser.name = "Laser";
    bmpLaser.width = img.width;
    bmpLaser.height = img.height;
    bmpLaser.currentFrame = 0;
    if(player) 
    {
    	bmpLaser.speedX = 15;
    	bmpLaser.x = mouse.x + imgPlayer.width/6;
    	bmpLaser.y = mouse.y + shift;
        // On stock le laser du jour créé dans un tableau
    	bmpPlayerLasers.push(bmpLaser);
    }
    else 
    {
    	bmpLaser.speedX = -10;
    	bmpLaser.x = enemy.x - imgEnemy1.width/2;
    	bmpLaser.y = enemy.y;
        // On stock le laser ennemmi créé dans un tableau
    	bmpEnemyLasers.push(bmpLaser);
    }
    // Ajout du laser au stage
    stage.addChild(bmpLaser);
	// Ajout de l'écouteur gérant l'animation du canvas
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true; // Utilisation des KeyAnimationFrames si disponible
    createjs.Ticker.setFPS(60);
}