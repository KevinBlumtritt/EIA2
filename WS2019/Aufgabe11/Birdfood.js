"use strict";
var L11;
(function (L11) {
    class Birdfood extends L11.Moveable {
        constructor(_size, _position) {
            super(_position);
            this.position = _position;
            this.velocity = new L11.Vector(0, 5);
            this.size = _size;
            this.foodVerticalPosition = Math.floor(Math.random() * (650 - 370 + 1)) + 370;
            // --> Math.floor(Math.random() * (max - min + 1)) + min;
            console.log("Birdfood constructor");
        }
        draw() {
            if (this.position.y < this.foodVerticalPosition) {
                this.move(1);
                console.log(this.foodVerticalPosition);
            }
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            L11.crc2.fillStyle = "#DAB062";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(-2, -1, 0.95, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "#4d2800";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(1.9, 1.45, 1.4, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "#4d2800";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(2.8, -1.45, 0.8, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "#4d2800";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(-2.3, 2.75, 0.7, 0, 2 * Math.PI);
            L11.crc2.fillStyle = "#4d2800";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
        }
    }
    L11.Birdfood = Birdfood;
})(L11 || (L11 = {}));
//# sourceMappingURL=Birdfood.js.map