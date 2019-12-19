namespace L09_Classes {
    export class Snowflake {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            console.log("Snowflake constructor");
            
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random()*crc2.canvas.width, Math.random()*crc2.canvas.height);
                
            this.velocity = new Vector(0,Math.random()+ 1*2);
            //this.velocity.random(100, 200); 
            this.size = _size;
        }

        move(_timeslice: number): void {
            //console.log("Snowflake move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height; 
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;         
        }

        draw(): void {
            //console.log("Snowflake draw");
            

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    
}