  
class Snow{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
           }
           this.x=x
           this.y=y
           this.radius=radius
           this.body=Bodies.circle(this.x,this.y,this.radius)

           World.add(world, this.body)
           this.image=loadImage("snow4.webp")
    }


    display(){
        var pos=this.body.position
        translate(pos.x, pos.y)
        image(this.image,0,0,this.radius,this.radius)
    }
}