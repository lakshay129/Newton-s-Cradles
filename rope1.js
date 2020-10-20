class rope1{
    constructor(bodyA,pointB){
        var options={
            bodyA:b2.body,
            pointB:pointB,
            stiffness:0.4,
            lenght:10,
        }

        this.pointB=pointB;
        this.rope=Constraint.create(options);


        World.add(world,this.rope);
    }

    display(){
        if (this.rope.bodyA){
            strokeWeight(4);
            fill 
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB

            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }      
    }

}