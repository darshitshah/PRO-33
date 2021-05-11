class Snow{
    constructor(x,y,r){
        var option = {
        density:5,
        isStatic: false,
        friction : 2
    }
    this.body = Bodies.circle(x,y,r,option)
    World.add(world,this.body)
    this.image = loadImage("snow4.webp")
    this.r = r
    }
display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    
}
}