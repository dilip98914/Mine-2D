export default class Block{
  constructor(x,y,dim,color){
    this.x=x;
    this.y=y;
    this.dim=dim;
    this.color=color;
    this.alphas=['a','b','c','d','0','2','4','$'];
    this.text=this.alphas[Math.round(Math.random()*7)];
    // console.log(this.text)

  }

  getBounds(){
    return{
      x:this.x,
      y:this.y,
      dim:this.dim

    }
  }

  render(context,xOff,yOff){
    context.fillStyle=this.color;
    context.fillRect(this.x-xOff,this.y-yOff,this.dim,this.dim);
    context.fillStyle="black";
    context.font = "30px Arial";
    context.fillText(this.text,this.x-xOff,this.y-yOff);

  }




}
