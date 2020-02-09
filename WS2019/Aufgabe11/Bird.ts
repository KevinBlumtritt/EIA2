namespace L11 {

    export enum TASK {
        FLY,
        FLYTOFOOD,
        EAT
    }

    export class Bird extends Moveable {
        public position: Vector;
        public velocity: Vector;
        public color: string;
        public size: number = 2; 
        public target: Vector;
        public job: TASK = TASK.FLY;


        constructor(_size: number, _position?: Vector) {

            super(_position);

            console.log("Bird constructor");

            this.color = getRandomColor();

            if (_position)
                this.position = _position;
            else {
                this.position = new Vector(Math.random() * crc2.canvas.width, Math.floor(Math.random() * 250) + 20);

                this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                // -1: Vögel fliegen von rechts nach links, *5: Geschwindigkeit, Math.randoms: Vögel fliegen zufällig entweder hoch oder runter
                //this.velocity.random(100, 200); 
            }

            this.size = _size;
        }

        draw(): void {


            if (this.job == TASK.EAT) {

                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                }, 5500); // anonyme Funktion, die auf das setTimeout zugreift
            }

            crc2.save();
            crc2.translate(this.position.x, this.position.y);   

            if (this.velocity.x >= 0.1) {
                crc2.scale(-1, 1);
                //console.log("BACK");
            }

            if (this.velocity.x <= -0.1) {
                crc2.scale(1, 1);
                //console.log("FORWARD");
            }

            
            if (this.job != TASK.EAT) {

                //body
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
                crc2.fillStyle = this.color;
                crc2.fill();
                crc2.restore();
                crc2.closePath();

                //head
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.arc(0, 0, 11, 0, 2 * Math.PI);
                crc2.fillStyle = this.color
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
                crc2.fillStyle = this.color;
                crc2.fill();
                crc2.restore();
                crc2.closePath();

            }

            if (this.job == TASK.EAT) {

                //body
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.ellipse(31, 1, 25, 15, Math.PI / 0.9, 0, 2 * Math.PI);
                crc2.fillStyle = this.color;
                crc2.fill();
                //crc2.restore();
                crc2.closePath();

                //head
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.arc(0, -5, 11, 0, 2 * Math.PI);
                crc2.fillStyle = this.color;
                crc2.fill();
                //crc2.restore();
                crc2.closePath();

                //eye
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.arc(-4, -7, 2, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.fill();
                //crc2.restore();
                crc2.closePath();

                //beak
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(-12, -6);
                crc2.lineTo(-27, 0);
                crc2.lineTo(-10, 2);
                crc2.fillStyle = "gold";
                crc2.fill();
                //crc2.restore();
                crc2.closePath();

                //legs
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(42, 16);
                crc2.lineTo(45, 37);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "gold";
                crc2.stroke();
                //crc2.restore();
                crc2.closePath();

                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                crc2.beginPath();
                crc2.moveTo(36, 16);
                crc2.lineTo(33, 37);
                crc2.lineWidth = 3;
                crc2.strokeStyle = "gold";
                crc2.stroke();
                //crc2.restore();
                crc2.closePath();
            }

           crc2.restore();
        }

        isHit(_hotspot: Vector): boolean {
            let hitsize: number = 24 * this.size;
            let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            //console.log(difference);

            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize) //Entfernung 
        }

        isPicking: Function = (): void => { //Sonderfall
            this.velocity = new Vector(0, 0);
        }
    }

    function getRandomColor(): string {
        let letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }


}