class Stone{
    constuctor(x,y){
        var options={
            restitution:0,
            density:1.2,
            friction:0.8
        }
        this.width=50;
        this.height=50;
        this.image-loadImage("images/stone.png");
        console.log(x);
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
    }
    display(){
        var stonePosition=this.body.position;
        push();
        translate(stonePosition.x,stonePosition.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}