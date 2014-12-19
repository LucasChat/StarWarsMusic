var bmpPlayer = null,
    firePlayer;

// Création du joueur
function createPlayer()
{
    var spriteSheet = new createjs.SpriteSheet({
        // Image à utiliser (choisoit selon le choix précédent du joueur)
        images: [imgPlayer], 
        // Définition des frames de l'image (Neuf, abimé, très abimé)
        frames: {width: imgPlayer.width/3, height: imgPlayer.height, regX: imgPlayer.width/6, regY: imgPlayer.height/2}, 
        animations: {   
            good: [0, 0, false],
            middle: [1, 1, false],
            bad: [2, 2, false]
        }
    });
    
    // Utilisation du constructeur EaselJS
    bmpPlayer = new createjs.BitmapAnimation(spriteSheet);
    bmpPlayer.gotoAndPlay("good");  //Lancement de la bonne frame
    // Définition des variables du background
    bmpPlayer.name = "Player";
    bmpPlayer.x = 100;
    bmpPlayer.y = 300;
    bmpPlayer.alive = true;
    bmpPlayer.wounded = false;
    bmpPlayer.greenBonus = false;
    bmpPlayer.redBonus = false;
    bmpPlayer.life = 3;
    bmpPlayer.alpha = 1;
    bmpPlayer.width = imgPlayer.width/3;
    bmpPlayer.height = imgPlayer.height;
    bmpPlayer.currentFrame = 0;
    // Ajout du joueur à la scene
    stage.addChild(bmpPlayer);
    // Ajout de l'écouteur gérant l'animation du canvas 
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true; // Utilisation des RequestAnimationFrames si possible
    createjs.Ticker.setFPS(60);
}

// Lancement des séquences de tir du joueur
function launchFirePlayer()
{
    firePlayer = setInterval(function(){
        if(bmpPlayer.firing && bmpPlayer.alive) 
        {
            if(bmpPlayer.greenBonus)
            {
                console.log("3");
                createNewLaser(true, null, bmpPlayer.height/4);
                createNewLaser(true, null, -bmpPlayer.height/4);
            }
            else
            {
                createNewLaser(true, null, 0);
            }
        }
    }, 200);
}

// Gestion de l'aspect du joueur blessé
function alpha() {
    bmpPlayer.alpha = 1;
    bmpPlayer.wounded = false;
}

// Gestion du déplacement du joueur si la souris est en dehors de l'écran
function outGameScreen () {
    if(mouse.x < bmpPlayer.width/2 && mouse.y > bmpPlayer.height/2 && mouse.y < canvas.offsetHeight-bmpPlayer.height/2)
        {
            bmpPlayer.x = bmpPlayer.width/2;
            bmpPlayer.y = mouse.y;
        }
        if(mouse.x > canvas.offsetWidth-bmpPlayer.width/2 && mouse.y > bmpPlayer.height/2 && mouse.y < canvas.offsetHeight-bmpPlayer.height/2)
        {
            bmpPlayer.x = canvas.width - bmpPlayer.width/2;
            bmpPlayer.y = mouse.y;
        }
        if(mouse.y < bmpPlayer.height/2 && mouse.x > bmpPlayer.width/2 && mouse.x < canvas.offsetWidth-bmpPlayer.width/2)
        {
            bmpPlayer.x = mouse.x;
            bmpPlayer.y = bmpPlayer.height/2;
        }
        if(mouse.y > canvas.offsetHeight-bmpPlayer.height/2 && mouse.x > bmpPlayer.width/2 && mouse.x < canvas.offsetWidth-bmpPlayer.width/2)
        {
            bmpPlayer.x = mouse.x;
            bmpPlayer.y = canvas.height - bmpPlayer.height/2;
        }
}