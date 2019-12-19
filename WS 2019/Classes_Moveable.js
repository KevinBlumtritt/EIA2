"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Moveable {
        constructor(_position) {
            super(_position);
            this.gradient = L09_Classes.crc2.createRadialGradient(0, 0, 2, 0, 0, 5);
            this.velocity = new L09_Classes.Vector(0, Math.random() * 3);
            this.gradient.addColorStop(0, "RGBA(250, 250, 250, 0.8)");
            this.gradient.addColorStop(1, "RGBA(250, 250, 250, 0.2)");
            this.draw();
        }
        draw() {
            L09_Classes.crc2.save();
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.fillStyle = this.gradient;
            L09_Classes.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
        }
    }
    L09_Classes.Moveable = Moveable;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Moveable.js.map