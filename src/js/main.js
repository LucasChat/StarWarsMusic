var canvas = document.getElementById("canvas"),
    stage  = null,
    replay = false;

// Relance le jeu
function resetGame() 
{
    stage.removeAllChildren();
    createjs.Ticker.removeAllListeners();
    pauseScreen.style.display = "none";
    gameOver.style.display = "none";
    victoryScreen.style.display = "none";
    bmpEnemyLasers = [];
    bmpEnemys = [];
    bmpBonusTab = [];
    clearInterval(fireEnemy0);
    clearInterval(fireEnemy1);
    clearInterval(fireEnemy2);
    clearInterval(fireEnemy3);
    clearInterval(fireBonus);
    clearInterval(firePlayer);
    createjs.Ticker.setPaused(false);
	gamePaused = false;
    startGame();
}

// Retour au menu et réinitialisation du choix du vaisseau
function returnMenu(param)
{
    replay = true;
    pauseScreen.style.display = "none";
    gameOver.style.display = "none";
    victoryScreen.style.display = "none";
    paused();
    selected_spaceship.xwing = false;
    selected_spaceship.naboo = false;
    selected_spaceship.millenium = false;
    selected_spaceship.interceptor = false;
    canvas.style.display = "none";
    switch(param)
    {
        case 0:
            home.style.display = "block";
            break;
        case 1:
            rules.style.display = "block";
            break;
        case 2:
            credit.style.display = "block";
            break;
        case 3:
            choose_spaceship.style.display = "block";
            break;
    }
}

// Lancement de l'algorithme du jeu une fois les ressources chargées
function startGame() 
{
	stage = new createjs.Stage(canvas);

	createBackground();
	createPlayer();
	generateEnemy();
	audio.currentTime = 0;
	audio.play();
	launchEnemyFire();
    launchFirePlayer();   
}

// Changement Frame par Frame
// Utilisation des KeyAnimationFrame si possibles, sinon géré par SetTimeOut
function tick() {
    // Gestion si réinitialisation
    if(replay)
    {
        replay = false;
        stage.removeChild(bmpPlayer);
        createPlayer();

    }

    // BACKGROUND
	bmpBackground.decal = bmpBackground.decal + bmpBackground.speedX; 

	if (bmpBackground.decal > bmpBackground.widthTravel) bmpBackground.decal = bmpBackground.decal - bmpBackground.widthTravel ;

	bmpBackground.x = -bmpBackground.decal;


    // DEPLACEMENT JOUEUR
    if(inGameScreenTest(mouse, bmpPlayer))
	{
        bmpPlayer.x = mouse.x;
        bmpPlayer.y = mouse.y;
    }
    else
    {
    	outGameScreen();
    }

    //  BONUS
    for(var i = 0 ; i < bmpBonusTab.length ; i++)
    {
    	// Deplacement bonus
    	bmpBonusTab[i].x = bmpBonusTab[i].x + bmpBonusTab[i].speedX;
    	// Collision bonus
    	if (bmpPlayer.alive && hitBox(bmpPlayer, bmpBonusTab[i])) 
	    {
	    	switch(bmpBonusTab[i].which)
	    	{
	    		case 0:
	    			useGreenBonus(i);
			        break;
			    case 1:
			    	useBlueBonus(i);
			    	break;
			    case 2:
			    	useRedBonus(i);
			    	break;
	    	}
	        
		}
    }

    // LASERS ENNEMIS
    for(var i = 0; i < bmpEnemyLasers.length; i++)
    {   // Déplacement
	    bmpEnemyLasers[i].x = bmpEnemyLasers[i].x + bmpEnemyLasers[i].speedX;
        // Impact
		if (!bmpPlayer.wounded && hitBox(bmpPlayer, bmpEnemyLasers[i])) 
        {
            bmpPlayer.life = bmpPlayer.life - 1;
            stage.removeChild(bmpEnemyLasers[i]);
            bmpEnemyLasers.splice(i, 1);
            impact(true);
            return;
        }
	}
	

    // ENNEMIS
    for(var k = 0 ; k < bmpEnemys.length ; k ++)
    {
    	// impact
    	if (bmpPlayer.alive && !bmpPlayer.wounded && hitBox(bmpPlayer, bmpEnemys[k])) 
        {
            bmpPlayer.life = bmpPlayer.life - 1;
            stage.removeChild(bmpEnemys[k]);
            bmpEnemys.splice(k, 1);
            impact(true);
            return;
    	}

    	// Déplacement
    	if(bmpEnemys[k].y > canvas.height - bmpEnemys[k].height/1.9 || bmpEnemys[k].y < bmpEnemys[k].height/1.9) bmpEnemys[k].speedY *= -1;
    	if(inGameScreenTestEnemy(bmpEnemys[k], bmpEnemys[k]))
    	{
    		bmpEnemys[k].x = bmpEnemys[k].x + bmpEnemys[k].speedX;
    		bmpEnemys[k].y = bmpEnemys[k].y + bmpEnemys[k].speedY;
    	}
    	else
    	{
    		stage.removeChild(bmpEnemys[k]);
            bmpEnemys.splice(k, 1);
    	}
    }


    	// LASERS
    for(var i = 0; i < bmpPlayerLasers.length; i++)
    {
  	
    	// Déplacement
    	if(bmpPlayerLasers.length != 0)
    	{
	    	if(inGameScreenTest(bmpPlayerLasers[i], bmpPlayerLasers[i]))
	    	{
	    		bmpPlayerLasers[i].x = bmpPlayerLasers[i].x + bmpPlayerLasers[i].speedX;
	        }
	        // Sortie canvas
	        else
	        {
	        	stage.removeChild(bmpPlayerLasers[i]);
	        	bmpPlayerLasers.splice(i, 1);
	        	return;
	        }
    	}

    		// Impact Laser Player
    	for(var j = 0 ; j < bmpEnemys.length ; j++)
    	{
    		if (bmpPlayer.alive && hitBox(bmpPlayerLasers[i], bmpEnemys[j])) 
	        {
				stage.removeChild(bmpEnemys[j]);
				bmpEnemys.splice(j, 1);
				if(!bmpPlayer.redBonus)
				{
					stage.removeChild(bmpPlayerLasers[i]);
					bmpPlayerLasers.splice(i, 1);
				}
	            return;
	        }
    	} 
    }
    // Rafraichissement du canvas
    stage.update();
}