var database,player,form,game,playerCount,gameState=0

function setup(){
    createCanvas(500,500);
    //creating database
    database = firebase.database()
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
   
}


