class paper
{
    constructor()
    {
        var option=
        {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(50,200,30,option);
        this.body.radius=30;
        World.add(world,this.body);
        this.paper=loadImage("paper.png")

    }
    display()
    {
        var paperpos = this.body.position;
        push()
       
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("red")
        ellipseMode(RADIUS)
       // ellipse(0,0,30,30)
        image(this.paper,0,0,90,90)
        
         pop()
    }
}