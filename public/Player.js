import Pig from './Pig.js';

var pig;
export default class Player{
  constructor(x,y,dim,color){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.dim=dim;
    this.color=color;
    // this.setSpeed(1,1);
    this.grav=.5;
    this.onG=false;
    this.holdLeft=false;
    this.holdRight=false;
    this.up=false;
    self.attacked=false;
    pig=new Pig(this.x+10,this.y+430,this.dim,"pink");
  }


 setSpeed(vx,vy){
   this.vx=vx;
   this.vy=vy;
 }

 getInput(val){
   this.holdLeft=val.holdLeft;
   this.holdRight=val.holdRight;
   this.up=val.up;

 }

 checkOutOfScreen(screenBounds){
   if(this.x<screenBounds.x0) this.x=screenBounds.x0;
   if(this.y<screenBounds.y0) this.y=screenBounds.y0;
   if(this.x>screenBounds.x1-this.dim) this.x=screenBounds.x1-this.dim;
   if(this.y>screenBounds.y1-this.dim) this.y=screenBounds.y1-this.dim;

 }



 checkCollision(blockArray){
   // console.log(blockArray.length);
     for(var i=0;i<blockArray.length;i++){

       var bounds=blockArray[i].getBounds();
       // console.log("bounds::"+blockArray[0].getBounds().y);

       if(this.x>=bounds.x && this.x<=bounds.x+bounds.dim &&
           this.y>=bounds.y-this.dim && this.y<=bounds.y+bounds.dim-this.dim){

               this.y=bounds.y-this.dim;
               this.onG=true;
               return;
             // return true;
           }
     }

 }

 checkAttack(val,bounds){
   if(val.k_key ){
     if(this.x>=bounds.x && this.x<=bounds.x+bounds.dim &&
         this.y>=bounds.y-this.dim && this.y<=bounds.y+bounds.dim-this.dim){
           self.attacked=true;
          pig.health--;
          if(pig.health<=0){
            console.log("pig died");
          }
   }
 }




}
  tick(val,screenBounds,blockArray){
    pig.tick();
    this.getInput(val);
    this.checkAttack(val,pig.getBounds());
    this.vx=0;

    if(this.holdLeft){
      this.vx=-2;
    }
    else if(this.holdRight){
      this.vx=2;
    }

    if(!this.onG){
      this.vy+=this.grav;
    }
    this.x+=this.vx;
    this.y+=this.vy;


    if(this.up){
      if(this.onG){
        this.vy=-10;
      }
    }

    this.onG=false;
    // else{
    //   if(this.vy>-3){
    //     this.vy=-3;
    //   }
    // }





    this.checkCollision(blockArray);





    this.checkOutOfScreen(screenBounds);
  }

  render(context){
    context.fillStyle=this.color;
    context.fillRect(this.x,this.y,this.dim,this.dim);
    pig.render(context);

  }


}
