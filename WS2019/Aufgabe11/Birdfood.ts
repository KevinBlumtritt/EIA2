namespace L11 {
    export class Birdfood extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;
        foodVerticalPosition: number;

        constructor(_size: number, _position: Vector) {

            super(_position);
            this.position = _position;
            this.velocity = new Vector(0, 5);
            this.size = _size;
            this.foodVerticalPosition = Math.floor(Math.random() * (650 - 370 + 1)) + 370;
            // --> Math.floor(Math.random() * (max - min + 1)) + min;

            console.log("Birdfood constructor");

        }

        
        draw(): void { 

            if(this.position.y < this.foodVerticalPosition){
                this.move(1);
                console.log(this.foodVerticalPosition)
            }
 
            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            crc2.fillStyle = "#DAB062";
            crc2.fill();
            crc2.restore();
            crc2.closePath();


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(-2, -1, 0.95, 0, 2 * Math.PI);
            crc2.fillStyle = "#4d2800";
            crc2.fill();
            crc2.restore();
            crc2.closePath();


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(1.9, 1.45, 1.4, 0, 2 * Math.PI);
            crc2.fillStyle = "#4d2800";
            crc2.fill();
            crc2.restore();
            crc2.closePath();


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(2.8, -1.45, 0.8, 0, 2 * Math.PI);
            crc2.fillStyle = "#4d2800";
            crc2.fill();
            crc2.restore();
            crc2.closePath();


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);
            crc2.arc(-2.3, 2.75, 0.7, 0, 2 * Math.PI);
            crc2.fillStyle = "#4d2800";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }

    }
}