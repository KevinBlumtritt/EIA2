"use strict";
var L11;
(function (L11) {
    let TASK;
    (function (TASK) {
        TASK[TASK["FLY"] = 0] = "FLY";
        TASK[TASK["FLYTOFOOD"] = 1] = "FLYTOFOOD";
        TASK[TASK["EAT"] = 2] = "EAT";
    })(TASK = L11.TASK || (L11.TASK = {}));
    class Bird extends L11.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.size = 2;
            this.job = TASK.FLY;
            this.isPicking = () => {
                this.velocity = new L11.Vector(0, 0);
            };
            console.log("Bird constructor");
            this.color = getRandomColor();
            if (_position)
                this.position = _position;
            else {
                this.position = new L11.Vector(Math.random() * L11.crc2.canvas.width, Math.floor(Math.random() * 250) + 20);
                this.velocity = new L11.Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                // -1: Vögel fliegen von rechts nach links, *5: Geschwindigkeit, Math.randoms: Vögel fliegen zufällig entweder hoch oder runter
                //this.velocity.random(100, 200); 
            }
            this.size = _size;
        }
        draw() {
            if (this.job == TASK.EAT) {
                setTimeout(() => {
                    this.job = TASK.FLY;
                    this.velocity = new L11.Vector(Math.random() - 1 * 5, (Math.random() * 2) + Math.random() - 1);
                }, 5500); // anonyme Funktion, die auf das setTimeout zugreift
            }
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            if (this.velocity.x >= 0.1) {
                L11.crc2.scale(-1, 1);
                //console.log("BACK");
            }
            if (this.velocity.x <= -0.1) {
                L11.crc2.scale(1, 1);
                //console.log("FORWARD");
            }
            if (this.job != TASK.EAT) {
                //body
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
                L11.crc2.fillStyle = this.color;
                L11.crc2.fill();
                L11.crc2.restore();
                L11.crc2.closePath();
                //head
                L11.crc2.save();
                L11.crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.arc(0, 0, 11, 0, 2 * Math.PI);
                L11.crc2.fillStyle = this.color;
                L11.crc2.fill();
                L11.crc2.restore();
                L11.crc2.closePath();
                //eye
                L11.crc2.save();
                L11.crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
                L11.crc2.fillStyle = "black";
                L11.crc2.fill();
                L11.crc2.restore();
                L11.crc2.closePath();
                //beak
                L11.crc2.save();
                L11.crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.moveTo(-11, -2);
                L11.crc2.lineTo(-26, 4);
                L11.crc2.lineTo(-9, 6);
                L11.crc2.fillStyle = "gold";
                L11.crc2.fill();
                L11.crc2.restore();
                L11.crc2.closePath();
                //wings
                L11.crc2.save();
                L11.crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.moveTo(13, -4);
                L11.crc2.lineTo(30, -35);
                L11.crc2.lineTo(47, -4);
                L11.crc2.fillStyle = this.color;
                L11.crc2.fill();
                L11.crc2.restore();
                L11.crc2.closePath();
            }
            if (this.job == TASK.EAT) {
                //body
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.ellipse(31, 1, 25, 15, Math.PI / 0.9, 0, 2 * Math.PI);
                L11.crc2.fillStyle = this.color;
                L11.crc2.fill();
                //crc2.restore();
                L11.crc2.closePath();
                //head
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.arc(0, -5, 11, 0, 2 * Math.PI);
                L11.crc2.fillStyle = this.color;
                L11.crc2.fill();
                //crc2.restore();
                L11.crc2.closePath();
                //eye
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.arc(-4, -7, 2, 0, 2 * Math.PI);
                L11.crc2.fillStyle = "black";
                L11.crc2.fill();
                //crc2.restore();
                L11.crc2.closePath();
                //beak
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.moveTo(-12, -6);
                L11.crc2.lineTo(-27, 0);
                L11.crc2.lineTo(-10, 2);
                L11.crc2.fillStyle = "gold";
                L11.crc2.fill();
                //crc2.restore();
                L11.crc2.closePath();
                //legs
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.moveTo(42, 16);
                L11.crc2.lineTo(45, 37);
                L11.crc2.lineWidth = 3;
                L11.crc2.strokeStyle = "gold";
                L11.crc2.stroke();
                //crc2.restore();
                L11.crc2.closePath();
                //crc2.save();
                //crc2.translate(this.position.x, this.position.y);
                L11.crc2.beginPath();
                L11.crc2.moveTo(36, 16);
                L11.crc2.lineTo(33, 37);
                L11.crc2.lineWidth = 3;
                L11.crc2.strokeStyle = "gold";
                L11.crc2.stroke();
                //crc2.restore();
                L11.crc2.closePath();
            }
            L11.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 24 * this.size;
            let difference = new L11.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            //console.log(difference);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize); //Entfernung 
        }
    }
    L11.Bird = Bird;
    function getRandomColor() {
        let letters = '0123456789ABCDEF'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L11 || (L11 = {}));
//# sourceMappingURL=Bird.js.map