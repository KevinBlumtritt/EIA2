"use strict";
var L11;
(function (L11) {
    class Snowball {
        constructor(_size, _position) {
            //super(_position);
            this.position = _position;
            this.size = _size;
        }
        draw() {
            L11.crc2.beginPath();
            L11.crc2.save();
            L11.crc2.translate(this.position.x, this.position.y);
            L11.crc2.scale(this.size, this.size);
            L11.crc2.arc(0, 0, this.size * 1.5, 0, 15 * Math.PI);
            L11.crc2.stroke();
            L11.crc2.fillStyle = "white";
            L11.crc2.strokeStyle = "black";
            L11.crc2.fill();
            L11.crc2.restore();
            L11.crc2.closePath();
        }
    }
    L11.Snowball = Snowball;
})(L11 || (L11 = {}));
//# sourceMappingURL=Snowball.js.map