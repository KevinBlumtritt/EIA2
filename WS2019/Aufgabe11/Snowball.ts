namespace L11{
    export class Snowball{
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position: Vector) {

            //super(_position);
            this.position = _position;
            this.size = _size;
 
        }

             draw(): void { 

                crc2.beginPath();
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.scale(this.size, this.size);
                crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.restore();
                crc2.closePath();
                
            }  

    }
}
  