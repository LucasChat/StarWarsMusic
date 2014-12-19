var gameOver      = document.querySelector('.game_over'),
	pauseScreen   = document.querySelector('.pause'),
	victoryScreen = document.querySelector(".success"),
	audio         = document.querySelector(".audio"),
	audioWin      = document.querySelector(".audioWin"),
	returnSound   = document.querySelector(".returnSound"),
	gamePaused    = false,
	textSound,
	maxTime;

// Surveille le blur de la page, pour mettre en pause si l'utilisateur la quitte
if(document.all) 
{
    document.onfocus = focusActive;
    document.onblur = focusDesactive;
}
window.onblur = function (){
    if(canvas.style.display == "block" && gameOver.style.display == "none" && victoryScreen.style.display == "none")
    {
        paused();
        pauseScreen.style.display = "block";
    }
}
document.onblur = window.onblur;

// Active/désactive le son
function sound()
{
	if(audio.volume == 0) 
	{
		audio.volume = 1;
		// textSound = ;
		returnSound.innerHTML = "désactiver le son";
	}
	else 
	{
		audio.volume = 0;
		// textSound = "activer le son";
		returnSound.innerHTML = "activer le son";
	}
}

// Ecouteur de victoire
audio.addEventListener('ended',function(e)
{
    victory();
});

// Ecouteur de souris enfoncée pour tir continu
canvas.onmousedown = function()
{

	if(bmpPlayer.greenBonus && bmpPlayer.alive)
	{
		console.log("3");
		createNewLaser(true, null, bmpPlayer.height/4);
		createNewLaser(true, null, -bmpPlayer.height/4);
	}
	else
	{
		if(bmpPlayer.alive) createNewLaser(true, null, 0);
	}
	bmpPlayer.firing = true;
}

// Ecouteur de sortie du tir continu
canvas.onmouseup = function()
{
	bmpPlayer.firing = false;
}

// Met le jeu en pause
function paused()
{
	createjs.Ticker.setPaused(true);
	gamePaused = true;
	clearInterval(intervalEnemy);
	audio.pause();
}

// Reprise du jeu
function resume()
{
	createjs.Ticker.setPaused(false);
	gamePaused = false;
	audio.play();
	var intervalEnemy = setInterval(newEnemy, timingSongPreci);
	pauseScreen.style.display = 'none';
	gameOver.style.display = 'none';
    victoryScreen.style.display = "none";
}

// Evènement si victoire
function victory()
{
    paused();
    audioWin.play();
    victoryScreen.style.display = "block";
}

// Gestion de la touche ECHAP pour la pause
function touche(event)
{
	var touche = event.keyCode;
	if(touche == 27)
	{
		if(pauseScreen.style.display == "none") 
		{
			paused();
			pauseScreen.style.display = "block";
		}
		else 
		{
			resume();
			pauseScreen.style.display = "none";
		}
	}
}