// constantes
const body = document.querySelector('.jeu-zombi');
const container = document.querySelector('.plateau');
const scoreBoard = document.querySelector('.score');
const btnStart = document.querySelector('.btnStart');
const niveauTitre = document.querySelector('.niveau'); 

//let chronoFormDisplay = document.querySelector('.chronoFormDisplay');
//chronoFormDisplay.style.display='none';

// variables

let derniereCachette = false;
let gameOver = false;
let score ;

/*let startTime = 0
let start = 0
let end = 0
let diff = 0
let timerID = 0*/


btnStart.addEventListener('click',startGame);

function startGame(){
    btnStart.style.display ='none';
    creationPlateau();
    startZombies();
    score=0;
    scoreBoard.innerHTML = score;
    scoring();
    niveauTitre.innerHTML = "Niveau 1";
    niveauTitre.style.color="#62929a";
    
}

function scoring(){
    scoreBoard.innerHTML = "Score : " + score;
    let message = score >=40 ? "C'est gagné !"  : "Vous avez perdu, voulez-vous refaire une partie ?";
   
    
    
    if(score <0 ){
        gameOver = true;
        btnStart.style.display ='block';
        confirm(message);    
        document.location.href="index.html";
    }
    
    if(score>=10 && score<20){
        gameOver = false;
        startZombies2();
    }
    
    if(score>=20 && score<30){
        gameOver = false;
        startZombies3();
    }
    
    if(score>=30 && score<41){
        gameOver = false;
        startZombies4();
    }
    
    if(score>=40 ){
        gameOver = true;
        btnStart.style.display ='block';
        let feu = 'feu';
        body.classList.add(feu);
        confirm(message);    
        document.location.href="index.html";
    }
    
}

function startZombies(){
    
    let cachette = randomUp();
    let temp = Math.floor(Math.random() * 3) + 1;
    
    
    let tempClass = temp > 1 ? 'up' : 'up2';
    
    cachette.classList.add(tempClass);
    
    const time = Math.round(Math.random()*(1500 - 250) + 250);
    
    setTimeout(function(){
        cachette.classList.remove(tempClass);
        if(!gameOver) startZombies();
    },time); 
    

}

function startZombies2(){
    
    let cachette = randomUp();
    let temp = Math.floor(Math.random() * 3) + 1;
    let tempClass = temp > 1 ? 'up' : 'up2';

    niveauTitre.innerHTML = "Niveau 2";
    niveauTitre.style.color="#33FFC0";
    btnStart.style.display ='none';
    creationPlateau2();
   
    scoreBoard.innerHTML = score;
    scoring();
    
    cachette.classList.add(tempClass);
    
    const time = Math.round(Math.random()*(1300 - 250) + 250);
    
    setTimeout(function(){
        cachette.classList.remove(tempClass);
        if(!gameOver) startZombies();
    },time); 
    
}

function startZombies3(){
    
    let cachette = randomUp();
    let temp = Math.floor(Math.random() * 3) + 1;
    let tempClass = temp > 1 ? 'up' : 'up2';
    
    niveauTitre.innerHTML = "Niveau 3";
    niveauTitre.style.color="#FFC333";
    btnStart.style.display ='none';
    creationPlateau3();
    scoreBoard.innerHTML = score;
    scoring();
   
    
    cachette.classList.add(tempClass);
    
    const time = Math.round(Math.random()*(1000 - 250) + 250);
    
    setTimeout(function(){
        cachette.classList.remove(tempClass);
        if(!gameOver) startZombies();
    },time); 
    
    
}

function startZombies4(){
    
    let cachette = randomUp();
    let temp = Math.floor(Math.random() * 3) + 1;
    let tempClass = temp > 1 ? 'up' : 'up2';
    
    niveauTitre.innerHTML = "Niveau 4";
    niveauTitre.style.color="#FF6433";
    btnStart.style.display ='none';
    creationPlateau4();
   
    scoreBoard.innerHTML = score;
    scoring();
   
    
    cachette.classList.add(tempClass);
    
    const time = Math.round(Math.random()*(500 - 250) + 250);
    
    setTimeout(function(){
        cachette.classList.remove(tempClass);
        if(!gameOver) startZombies();
    },time); 
    
    
}

function randomUp(){
    
    // on crée une variable pour aller chercher toutes les div class = cachette
    const cachettes = document.querySelectorAll('.cachette');
    
    // constante qui va générer un chiffre aléatoire parmi les 9 occurrences
    const idx = Math.floor(Math.random()*cachettes.length);
    
    if(cachettes[idx].zombieId === derniereCachette){
        // on relance la génération de l'index
        
        return randomUp();
          
       }
    // on stocke le résultat dans la variable derniereCachette
    
    derniereCachette = cachettes[idx].zombieId;
    
    // on retourne la valeru obtenue
    
    return cachettes[idx];
}

function creationPlateau(){
   
    let cachetteCrees = 9;
    
    container.innerHTML = ' ';
    
    // création d'une boucle pour la création de div qui représente les cachettes ( pas plus de 9)
    for(let x = 0;x < cachetteCrees; x++){
        // Créer les div
        let div = document.createElement('div');
        
        // rajout d'une class à chaque div nouvellement créée
        div.setAttribute('class','cachette');
        div.zombieId = x;
        
        // on crée dynamiquement une div avec une classe et un évènement (tir) pour les zombies, lola
        
        // zombies
        let zombie = document.createElement('div');
        zombie.setAttribute('class','zombie');
        zombie.onclick = tir;
        div.appendChild(zombie);
        
         // lola
        let lola = document.createElement('div');
        lola.setAttribute('class','lola');
        lola.onclick = tir2;
        div.appendChild(lola);
        
        // mur
        let mur = document.createElement('div');
        mur.setAttribute('class','mur');
        div.appendChild(mur);
        
        
        // on rattache nos divs créées à la div plateau
        container.appendChild(div);
        
    }
    
}

function creationPlateau2(){
   
    let cachetteCrees = 9;
    
    container.innerHTML = ' ';

     
    // création d'une boucle pour la création de div qui représente les cachettes ( pas plus de 9)
    for(let x = 0;x < cachetteCrees; x++){
        // Créer les div
        let div = document.createElement('div');
          
        // rajout d'une class à chaque div nouvellement créée
        div.setAttribute('class','cachette');
        div.zombieId = x;
        
        // on crée dynamiquement une div avec une classe et un évènement (tir) pour les zombies, lola
        
        // zombies
        let zombie = document.createElement('div');
        zombie.setAttribute('class','zombie2');
        zombie.onclick = tir;
        div.appendChild(zombie);
        
         // lola
        let lola = document.createElement('div');
        lola.setAttribute('class','lola');
        lola.onclick = tir2;
        div.appendChild(lola);
        
        // mur
        let mur = document.createElement('div');
        mur.setAttribute('class','mur2');
        div.appendChild(mur);
        
        
        // on rattache nos divs créées à la div plateau
        container.appendChild(div);
        
    }
    
}

function creationPlateau3(){
   
    let cachetteCrees = 9;
    
    container.innerHTML = ' ';

    
    // création d'une boucle pour la création de div qui représente les cachettes ( pas plus de 9)
    for(let x = 0;x < cachetteCrees; x++){
        // Créer les div
        let div = document.createElement('div');
        
        // rajout d'une class à chaque div nouvellement créée
        div.setAttribute('class','cachette');
        div.zombieId = x;
        
        // on crée dynamiquement une div avec une classe et un évènement (tir) pour les zombies, lola
        
        // zombies
        let zombie = document.createElement('div');
        zombie.setAttribute('class','zombie3');
        zombie.onclick = tir;
        div.appendChild(zombie);
        
         // lola
        let lola = document.createElement('div');
        lola.setAttribute('class','lola');
        lola.onclick = tir2;
        div.appendChild(lola);
        
        // mur
        let mur = document.createElement('div');
        mur.setAttribute('class','mur3');
        div.appendChild(mur);
        
        
        // on rattache nos divs créées à la div plateau
        container.appendChild(div);
        
    }
    
}

function creationPlateau4(){
   
    let cachetteCrees = 9;
    
    container.innerHTML = ' ';

    
    // création d'une boucle pour la création de div qui représente les cachettes ( pas plus de 9)
    for(let x = 0;x < cachetteCrees; x++){
        // Créer les div
        let div = document.createElement('div');
        
        // rajout d'une class à chaque div nouvellement créée
        div.setAttribute('class','cachette');
        div.zombieId = x;
        
        // on crée dynamiquement une div avec une classe et un évènement (tir) pour les zombies, lola
        
        // zombies
        let zombie = document.createElement('div');
        zombie.setAttribute('class','zombie4');
        zombie.onclick = tir;
        div.appendChild(zombie);
        
         // lola
        let lola = document.createElement('div');
        lola.setAttribute('class','lola');
        lola.onclick = tir2;
        div.appendChild(lola);
        
        // mur
        let mur = document.createElement('div');
        mur.setAttribute('class','mur4');
        div.appendChild(mur);
        
        
        // on rattache nos divs créées à la div plateau
        container.appendChild(div);
        
    }
    
}



function tir(e){
    score++;
    this.parentNode.classList.remove('up');
    scoring();
}

function tir2(){
    score = score - 5;
    this.parentNode.classList.remove('up2');
    scoring();
}


/*

function chrono(){
    
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").value = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){

	start = new Date()
	chrono()
}

function chronoReset(){
	document.getElementById("chronotime").value = "00:00:00"
	start = new Date()
}



function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").value = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}
*/


