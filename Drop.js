class Rain {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.radiusX=random(10,20);
        this.radiusy=random(20,40);
        this.speed=random(10,20);

    };
    display(){
        fill("green")
       ellipse(this.x,this.y,this.radiusX,this.radiusY);
    };
    fall(){
        this.y=this.y+this.speed;
        if(this.y>height){
           this.y=0;
           this.speed=random(10,20)
        }
    }
}