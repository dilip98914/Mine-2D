import Player from './Player.js';
import Level from './Level.js';

var canvas=document.getElementById('canvas');
var context=canvas.getContext('2d');
var WIDTH=canvas.width;
var HEIGHT=canvas.height;
context.fillStyle="black";
context.fillRect(0,0,WIDTH,HEIGHT);

var holdLeft=false;
var holdRight=false;
var up=false;
var k_key=false;

//
var player;
var level;


function keydown(e){
  e.preventDefault();

    switch(e.keyCode){
        case 37:
          holdLeft=true;
          break;
        case 39:
          holdRight=true;
          break;
        case 38:
          up=true;
          break;
        case 75:
          k_key=true;
          break;

    }
}

function keyup(e){
  e.preventDefault();
  switch(e.keyCode){
      case 37:
        holdLeft=false;
        break;
      case 39:
        holdRight=false;
        break;
      case 38:
        up=false;
        break;
      case 75:
        k_key=true;
        break;


  }
}


function init(){
  player=new Player(0,10,32,"red");
  level=new Level(200*32,10*32,player);
  document.addEventListener('keydown',keydown);
  document.addEventListener('keyup',keyup);

}

function tick(){
  context.fillStyle="black";
  context.fillRect(0,0,WIDTH,HEIGHT);
  level.tick();
  player.tick({
    holdLeft:holdLeft,
    holdRight:holdRight,
    up:up,
    k_key:k_key
  },{
    x0:0,
    y0:0,
    x1:WIDTH,
    y1:HEIGHT
  },  level.blocks);

  level.render(context);
  player.render(context);

  requestAnimationFrame(tick);
}

init();
tick();
