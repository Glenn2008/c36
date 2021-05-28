var ball;
var database,gameState=0,playerCount;
var form,game,player;

function setup(){
   database=firebase.database();
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
   background("orange");
}

