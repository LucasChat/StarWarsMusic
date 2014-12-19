var bmpBonusTab = [];

// Création d'un bonus
function createBonus(type)
{
    switch(type)
    {
        case 0:
            var bonus = imgGreenBonus;
            break;
        case 1:
            var bonus = imgBlueBonus;
            break;
        case 2:
            var bonus = imgRedBonus;
            break;
    }

	var spriteSheet = new createjs.SpriteSheet({
	    // Image à utiliser (choisit aléatoirement)
	    images: [bonus], 
	    // Définition des frames de l'image
	    frames: {width: bonus.width, height: bonus.height}, 
    });
	
    // Utilisation du constructeur EaselJS
	bmpBonus = new createjs.BitmapAnimation(spriteSheet);
    // Définition des variables du background
    bmpBonus.name = "Bonus";
    bmpBonus.which = type;
    bmpBonus.x = canvas.width + bonus.width/2;
    bmpBonus.y = Math.floor(Math.random() * (canvas.height-(bonus.height*2))) + (bonus.height);
    bmpBonus.width = bonus.width;
    bmpBonus.height = bonus.height;
    bmpBonus.speedX = -2.5;
    bmpBonus.currentFrame = 0;
    // On stock l'ennemmi créé dans un tableau qu'on pourra parcourir
    bmpBonusTab.push(bmpBonus);
    // Ajout de l'élément au stage
    stage.addChild(bmpBonus);
	// Ajout de l'écouteur gérant l'animation du canvas
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true;  // Utilisation des RequestAnimationFrames si possible
    createjs.Ticker.setFPS(60);
}

// Activation du bonus vert
function useGreenBonus(i)
{
    bmpPlayer.greenBonus = true;
    stage.removeChild(bmpBonusTab[i]);
    bmpBonusTab.splice(i, 1);
}
// Activation du bonus rouge
function useRedBonus(i)
{
    bmpPlayer.redBonus = true;
    stage.removeChild(bmpBonusTab[i]);
    bmpBonusTab.splice(i, 1);
}
// Activation du bonus blue
function useBlueBonus(i)
{
    if(bmpPlayer.life < 3) 
    {
        bmpPlayer.life = bmpPlayer.life + 1;
        impact(false);
        stage.removeChild(bmpBonusTab[i]);
        bmpBonusTab.splice(i, 1);
    }
}

// Génération aléatoire des bonus à partir d'un certain seuil d'ennemis présents à l'écran
var fireBonus = setInterval(function(){
    if(bmpEnemys.length > 8)
    {
        if(Math.random() > 0.5) createBonus(Math.floor(Math.random()*3));
    }
}, 3000);