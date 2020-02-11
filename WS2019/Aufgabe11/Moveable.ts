namespace L11{
    export abstract class Moveable {
        protected position: Vector;
        protected velocity: Vector;

        protected constructor(_position?: Vector) {
            
        }

        protected move(_timeslice: number): void {
            
            //console.log("Moveable move");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.y > crc2.canvas.height + 50)
                this.position.y -= crc2.canvas.height + 60;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;

            if (this.position.y < - 50)
                this.position.y += crc2.canvas.height + 70; 
            if (this.position.x < - 50)
                this.position.x += crc2.canvas.width + 50;                  
        }

        protected draw(): void {
          
        }

    }
    
}