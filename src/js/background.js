var chooseBackground = Math.floor(Math.random() * 6),
	bmpBackground = null;

// Création du background
function createBackground()
{
	var spriteSheet = new createjs.SpriteSheet({
	    // Image à utiliser
	    images: [imgBackground], 
	    // Définition des frames de l'image
	    frames: {width: imgBackground.width, height: imgBackground.height}, 

    });
	
    // Utilisation du constructeur EaselJS
	bmpBackground = new createjs.BitmapAnimation(spriteSheet);
	// Définition des variables du background
    bmpBackground.name = "Background";
    bmpBackground.x = 0;
    bmpBackground.y = 0;
    bmpBackground.width = imgBackground.width;
    bmpBackground.height = imgBackground.height;
    bmpBackground.widthTravel = bmpBackground.width - canvas.width;
    bmpBackground.speedX = 2;
    bmpBackground.decal = 0;
    bmpBackground.currentFrame = 0;
    // Ajout du background au stage
    stage.addChild(bmpBackground);
	// Ajout de l'écouteur gérant l'animation du canvas	
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true; // Utilisation des KeyAnimationFrames si disponible
    createjs.Ticker.setFPS(60);
}