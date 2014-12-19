// NAVIGATION BASIQUE
var home = document.querySelector('.content_home'),
 	rules = document.querySelector('.content_rules'),
 	credit = document.querySelector('.content_credit'),
 	game = document.querySelector('.content_game'),
 	home_menu = document.querySelector('.home'),
 	rules_menu = document.querySelector('.rules'),
 	credit_menu = document.querySelector('.credit'),
 	game_menu = document.querySelector('.game'),
 	choose_spaceship = document.querySelector('.choose_spaceship'),
 	choose_music = document.querySelector('.choose_music'),
 	spaceship_xwing = document.querySelector('.spaceship_xwing'),
 	spaceship_millenium = document.querySelector('.spaceship_millenium'),
 	spaceship_naboo = document.querySelector('.spaceship_naboo'),
 	spaceship_interceptor = document.querySelector('.spaceship_interceptor'),
 	selected_spaceship = {
 		xwing : false,
 		millenium : false,
 		naboo : false,
 		interceptor : false
 	};

// REMISE A NONE DE TOUS LES ELEMENTS
function allNone()
{
	home.style.display = "none";
	credit.style.display = "none";
	rules.style.display = "none";
	choose_spaceship.style.display = "none";
	choose_music.style.display = "none";
	gameOver.style.display = "none";
	pauseScreen.style.display = "none";
	victoryScreen.style.display = "none";
}

home_menu.onclick = function()
{
	allNone();
	home.style.display = "block";
	if (canvas.style.display == "block") returnMenu(0);
	canvas.style.display = "none";
}

rules_menu.onclick = function()
{
	allNone();
	rules.style.display = "block";
	if (canvas.style.display == "block") returnMenu(1);
	canvas.style.display = "none";
}

credit_menu.onclick = function()
{
	allNone();
	credit.style.display = "block";
	if (canvas.style.display == "block") returnMenu(2);
	canvas.style.display = "none";
}

game_menu.onclick = function()
{
	allNone();
	choose_spaceship.style.display = "block";
	if (canvas.style.display == "block") returnMenu(3);
	canvas.style.display = "none";
}

spaceship_xwing.onclick = function()
{
	selected_spaceship.xwing = true;
	choose_spaceship.style.display = "none";
	choose_music.style.display = "block";
}

spaceship_millenium.onclick = function()
{
	selected_spaceship.millenium = true;
	choose_spaceship.style.display = "none";
	choose_music.style.display = "block";
}

spaceship_naboo.onclick = function()
{
	selected_spaceship.naboo = true;
	choose_spaceship.style.display = "none";
	choose_music.style.display = "block";
}

spaceship_interceptor.onclick = function()
{
	selected_spaceship.interceptor = true;
	choose_spaceship.style.display = "none";
	choose_music.style.display = "block";
}


// NAVIGUATION JEU
var	sw_un        = document.querySelector('.star_wars_un'),
	sw_deux      = document.querySelector('.star_wars_deux'),
	sw_trois     = document.querySelector('.star_wars_trois'),
	sw_quatre    = document.querySelector('.star_wars_quatre'),
	sw_cinq      = document.querySelector('.star_wars_cinq'),
	sw_six       = document.querySelector('.star_wars_six'),
	selected_sw1 = document.querySelector('.selected_sw1'),
	selected_sw2 = document.querySelector('.selected_sw2'),
	selected_sw3 = document.querySelector('.selected_sw3'),
	selected_sw4 = document.querySelector('.selected_sw4'),
	selected_sw5 = document.querySelector('.selected_sw5'),
	selected_sw6 = document.querySelector('.selected_sw6'),
	selected_1   = document.querySelector('.selected_1'),
	selected_2   = document.querySelector('.selected_2'),
	selected_3   = document.querySelector('.selected_3'),
	selected_4   = document.querySelector('.selected_4'),
	selected_5   = document.querySelector('.selected_5'),
	selected_6   = document.querySelector('.selected_6'),
	selected_7   = document.querySelector('.selected_7'),
	selected_8   = document.querySelector('.selected_8'),
	selected_9   = document.querySelector('.selected_9'),
	selected_10  = document.querySelector('.selected_10'),
	selected_11  = document.querySelector('.selected_11'),
	selected_12  = document.querySelector('.selected_12'),
	selected_13  = document.querySelector('.selected_13'),
	selected_14  = document.querySelector('.selected_14'),
	selected_15  = document.querySelector('.selected_15'),
	selected_16  = document.querySelector('.selected_16'),
	selected_17  = document.querySelector('.selected_17');

function level()
{
	var select = document.querySelector('.custom_dropdown_select').value;
	sw_un.style.display        = "none";
	sw_deux.style.display      = "none";
	sw_trois.style.display     = "none";
	sw_quatre.style.display    = "none";
	sw_cinq.style.display      = "none";
	sw_six.style.display       = "none";
	selected_sw1.style.display = "none";
	selected_sw2.style.display = "none";
	selected_sw3.style.display = "none";
	selected_sw4.style.display = "none";
	selected_sw5.style.display = "none";
	selected_sw6.style.display = "none";
	selected_1.style.display   = "none";
	selected_2.style.display   = "none";
	selected_3.style.display   = "none";
	selected_4.style.display   = "none";
	selected_5.style.display   = "none";
	selected_6.style.display   = "none";
	selected_7.style.display   = "none";
	selected_8.style.display   = "none";
	selected_9.style.display   = "none";
	selected_10.style.display  = "none";
	selected_11.style.display  = "none";
	selected_12.style.display  = "none";
	selected_13.style.display  = "none";
	selected_14.style.display  = "none";
	selected_15.style.display  = "none";
	selected_16.style.display  = "none";
	selected_17.style.display  = "none";

	switch(select){
		case 'Star Wars IV':
			sw_quatre.style.display = "block";
			selected_sw4.style.display = "block";
			break;
		case 'Star Wars V':
			sw_cinq.style.display = "block";
			selected_sw5.style.display = "block";
			break;
		case 'Star Wars VI':
			sw_six.style.display = "block";
			selected_sw6.style.display = "block";
			break;
		case 'Star Wars I':
			sw_un.style.display = "block";
			selected_sw1.style.display = "block";
			break;
		case 'Star Wars II':
			sw_deux.style.display = "block";
			selected_sw2.style.display = "block";
			break;
		case 'Star Wars III':
			sw_trois.style.display = "block";
			selected_sw3.style.display = "block";
			break;
	}
}

function change(music){
	
	selected_sw1.style.display = "none";
	selected_sw2.style.display = "none";
	selected_sw3.style.display = "none";
	selected_sw4.style.display = "none";
	selected_sw5.style.display = "none";
	selected_sw6.style.display = "none";
	selected_1.style.display   = "none";
	selected_2.style.display   = "none";
	selected_3.style.display   = "none";
	selected_4.style.display   = "none";
	selected_5.style.display   = "none";
	selected_6.style.display   = "none";
	selected_7.style.display   = "none";
	selected_8.style.display   = "none";
	selected_9.style.display   = "none";
	selected_10.style.display  = "none";
	selected_11.style.display  = "none";
	selected_12.style.display  = "none";
	selected_13.style.display  = "none";
	selected_14.style.display  = "none";
	selected_15.style.display  = "none";
	selected_16.style.display  = "none";
	selected_17.style.display  = "none";

	switch(music){
		case 1:
			selected_1.style.display = "block";
			break;
		case 2:
			selected_2.style.display = "block";
			break;
		case 3:
			selected_3.style.display = "block";
			break;
		case 4:
			selected_4.style.display = "block";
			break;
		case 5:
			selected_5.style.display = "block";
			break;
		case 6:
			selected_6.style.display = "block";
			break;
		case 7:
			selected_7.style.display = "block";
			break;
		case 8:
			selected_8.style.display = "block";
			break;
		case 9:
			selected_9.style.display = "block";
			break;
		case 10:
			selected_10.style.display = "block";
			break;
		case 11:
			selected_11.style.display = "block";
			break;
		case 12:
			selected_12.style.display = "block";
			break;
		case 13:
			selected_13.style.display = "block";
			break;
		case 14:
			selected_14.style.display = "block";
			break;
		case 15:
			selected_15.style.display = "block";
			break;
		case 16:
			selected_16.style.display = "block";
			break;
		case 17:
			selected_17.style.display = "block";
			break;
	}
}

function previous(){
	selected_spaceship.xwing = false;
	selected_spaceship.naboo = false;
	selected_spaceship.millenium = false;
	selected_spaceship.interceptor = false;
	choose_spaceship.style.display = "block";
	choose_music.style.display = "none";
}

function letsGo(musicString, musicTab){
	choose_music.style.display = "none";
	canvas.style.display = "block";
	audio.src = "src/media/audios/" + musicString +".mp3";
	whichMusic = musicTab;
	init();
}