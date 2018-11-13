import Block from './Block.js';

export default class Level{
  constructor(w,h,player){
    this.player=player;
    this.width=w;
    this.height=h;
    this.xOffset=0;
    this.yOffset=0;
    this.blocks=[];
    // for(var i=0;i<this.width/32;i++){
    //   this.generatePlatform(i,15);
    //
    // }
    this.fillLevel();

  }


  calculateOffset(vx,vy,w,h){
    this.xOffset=vx;
    this.yOffset=vy-12;
    this.xOffset=this.yOffset=0;
  }


  generateSimpleLevel(y0t=15,y1t=y0t+this.height/32+15,x0t=0,x1t=this.width/32){
    for(var j=y0t;j<y1t;j++){
      for(var i=x0t;i<x1t;i++){
          this.blocks.push(new Block(i*32,j*32,32,"yellow"));
        }
    }
    // console.log;
  }
  generateLevel(){

    for(var k=0;k<20;k++){
      var i=Math.round(Math.random()*500)/32;
      var j=Math.round(Math.random()*500)/32;
      this.generatePlatform(i,j);
}

  }
  generatePlatform(xx, yy){

    var  stepSize=Math.round(Math.random()*4)+3;//3 to 7
    var x0t=xx;
    var x1t=x0t+stepSize;

    stepSize=Math.round(Math.random()*2)+1;//1 to 3
    var   y0t=yy;
    var y1t=y0t+stepSize;

    for(var j=y0t;j<y1t;j++){
      for(var i=x0t;i<x1t;i++){
          this.blocks.push(new Block(i*32,j*32,32,"yellow"));
        }
    }


  }


  fillLevel(){
    for(var j=15;j<this.height/32+15;j++){
      for(var i=0;i<this.width/32;i++){
          this.blocks.push(new Block(i*32,j*32,32,"yellow"));
        }
    }
  }


  tick(){
    // for(var i=0;i<this.blocks.length;i++){
    //   blocks[i].tick();
    // }
    this.calculateOffset(this.player.vx,this.player.vy,300,300);

  }

  render(context){
        for(var i=0;i<this.blocks.length;i++){
          this.blocks[i].render(context,this.xOffset,this.yOffset);
        }
  }

}
