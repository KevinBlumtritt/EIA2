namespace L09_Classes {
    export class Bird {
        position: Vector;
        velocity: Vector;
        bodycolor: string;
        wingcolor: string;

        constructor(_size: number, _position?: Vector) {
            console.log("Bird constructor");

            this.bodycolor = getRandomColor();
            this.wingcolor = getRandomColor();
            
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(Math.random()*crc2.canvas.width, Math.floor(Math.random() * 250) + 20 );
                
            this.velocity = new Vector(Math.random() - 1 * 5, 0);
            //this.velocity.random(100, 200); 
            
            
        }

        move(_timeslice: number): void {

            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y < 0)
                this.position.y += crc2.canvas.height; 
            if (this.position.x < -50)
                this.position.x += crc2.canvas.width;         
        }

        draw(): void {

            //body
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            crc2.fillStyle = this.bodycolor;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
    
            //head
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 11, 0, 2 * Math.PI);
            crc2.fillStyle = this.bodycolor
            crc2.fill();
            crc2.restore();
            crc2.closePath();
    
            //eye
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
    
            //beak
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(-11, -2);
            crc2.lineTo(-26, 4);
            crc2.lineTo(-9, 6);
            crc2.fillStyle = "gold";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
    
            //wings
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(13, -4);
            crc2.lineTo(30, -35);
            crc2.lineTo(47, -4);
            crc2.fillStyle = this.wingcolor;
            crc2.fill();
            crc2.restore();
            crc2.closePath();
    
        }

    }

    function getRandomColor(): string {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
        }
}