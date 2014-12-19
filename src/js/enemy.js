var bmpEnemys = [],
	fireEnemy0,
	fireEnemy1,
	fireEnemy2,
	fireEnemy3,
	tabSongEnemy,
	timingSongPreci,
	whichMusic,
	intervalEnemy,
	statEnemy = [          
					[-4, 2, 2000],
					[-3, -1, 2222],     // Caractéristiques des ennemis.
					[-6, 0, 2700],
					[-8, 0, 3100]
				];

// Création d'un ennemi
function createNewEnemy(type)
{
	switch(type)
	{
		case 0:
			var img = imgEnemy1;
			break;
		case 1:
			var img = imgEnemy2;
			break;
		case 2:
			var img = imgEnemy3;
			break;
		case 3:
			var img = imgEnemy4;
			break;
	}
	var spriteSheet = new createjs.SpriteSheet({
	    // Image à utiliser (choisit aléatoirement)
	    images: [img], 
	    // Définition des frames de l'image
	    frames: {width: img.width, height: img.height, regX: img.width/2, regY: img.height/2}, 
    });
	
    // Utilisation du constructeur EaselJS
	bmpEnemy = new createjs.BitmapAnimation(spriteSheet);
	// Définition des variables du background
    bmpEnemy.which = type;
    bmpEnemy.name = "Enemy";
    bmpEnemy.speedX = statEnemy[type][0];
    bmpEnemy.speedY = statEnemy[type][1];
    bmpEnemy.width = img.width;
    bmpEnemy.height = img.height;
    bmpEnemy.x = canvas.width + img.width/2;
    bmpEnemy.y = Math.floor(Math.random() * (canvas.height-(img.height*2))) + (img.height);
    bmpEnemy.currentFrame = 0;
    // On stock l'ennemmi créé dans un tableau qu'on pourra parcourir
    bmpEnemys.push(bmpEnemy);
    // Ajout de l'élément au stage
    stage.addChild(bmpEnemy);
	// Ajout de l'écouteur gérant l'animation du canvas	
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true; // Utilisation des RequestAnimationFrames si possible
    createjs.Ticker.setFPS(60);
}

// Lancement des séquences de tir des ennemis, avec un interval spécifique à chaque type d'ennemi
function launchEnemyFire() 
{

	fireEnemy0 = setInterval(function(){
		for(i = 0 ; i < bmpEnemys.length ; i++)
		{
			if(bmpEnemys[i].which == 0) createNewLaser(false, bmpEnemys[i]);
		}
	}, statEnemy[0][2]);

	fireEnemy1 = setInterval(function(){
		for(i = 0 ; i < bmpEnemys.length ; i++)
		{
			if(bmpEnemys[i].which == 1) createNewLaser(false, bmpEnemys[i]);
		}
	}, statEnemy[1][2]);

	fireEnemy2 = setInterval(function(){
		for(i = 0 ; i < bmpEnemys.length ; i++)
		{
			if(bmpEnemys[i].which == 2) createNewLaser(false, bmpEnemys[i]);
		}
	}, statEnemy[2][2]);

	fireEnemy3 = setInterval(function(){
		for(i = 0 ; i < bmpEnemys.length ; i++)
		{
			if(bmpEnemys[i].which == 3) createNewLaser(false, bmpEnemys[i]);
		}
	}, statEnemy[3][2]);
}


// Fonction écoutant la musique au fur et à mesure de sa progression, et comparant le temps écoulé à son tableau de valeur respectif
// Elle renvoit une génération d'ennemi ou non en fonction de son analyse
function generateEnemy()
{
	tabSongEnemy = whichMusic.slice(0); // Correspond au timing des ennemis selon la musique, copie du bon tableau musique à chaque fois
	
	timingSongPreci = 50;
	maxTime = audio.duration;

	function newEnemy(){
		if(tabSongEnemy.length >= 0 && audio.currentTime >= tabSongEnemy[0]){
			tabSongEnemy.shift(); // on enlève le premier élément du tableau
			createNewEnemy(Math.floor(Math.random() * 4));
		}
	}

	intervalEnemy = setInterval(newEnemy, timingSongPreci); //ne pas oublier de le clear !
}

function newEnemy()
{
    if(tabSongEnemy.length >= 0 && audio.currentTime >= tabSongEnemy[0])
    {
    	tabSongEnemy.shift(); // on enlève le premier élément du tableau
    	createNewEnemy(Math.floor(Math.random() * 4));
    }
}