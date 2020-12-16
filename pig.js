class Pig{
    constructor(x,y){

var options={friction:1.0,density:1.0,restitution:0.4}
this.body=Bodies.rectangle(x,y,50,50,options);
this.width=50
this.height=50
 //Add bodies to game world
  World.add(myWorld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle)
        fill("green");

//to add body to this.body soul
 rectMode(CENTER); 
//the rect should be designed in the x and y axis of soul
 rect(0,0,this.width,this.height);
 pop ()
    }
}