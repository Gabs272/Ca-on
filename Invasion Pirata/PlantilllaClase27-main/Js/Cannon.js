class Cannon {
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

    display() {

        if(keyIsDown(UP_ARROW) && this.angle < 0.25) { 
            this.angle += 0.02; 
            console.log(this.angle); 
        } 
        if(keyIsDown(DOWN_ARROW) && this.angle > -1.50) { 
            this.angle -= 0.02; 
            console.log(this.angle); 
        }

        fill("grey")
        push();
        translate(this.x, this.y);
        rotate(this.angle)
       //rotate(angle);
        rect(-10, -20, this.width, this.height);
        pop();
        arc(this.x -30 , this.y +90, 140, 200, PI, TWO_PI);
        noFill();
    }
}
