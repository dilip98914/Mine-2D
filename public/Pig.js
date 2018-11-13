export default class Pig{
  constructor(x,y,dim,color){
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.dim=dim;
    this.color=color;
    this.grav=.5;
    this.health=10;
  }


  getBounds(){
    return{
      x:this.x,
      y:this.y,
      dim:this.dim

    }
  }

  tick(){

  }


  render(context){
    context.fillStyle=this.color;
    context.fillRect(this.x,this.y,this.dim,this.dim);
  }


}
