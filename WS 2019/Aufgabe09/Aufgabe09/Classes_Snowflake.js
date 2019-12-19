"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Snowflake {
        constructor(_size, _position) {
            console.log("Snowflake constructor");
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Classes.Vector(Math.random() * L09_Classes.crc2.canvas.width, Math.random() * L09_Classes.crc2.canvas.height);
            this.velocity = new L09_Classes.Vector(0, Math.random() + 1 * 2);
            //this.velocity.random(100, 200); 
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("Snowflake move");
            let offset = new L09_Classes.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > L09_Classes.crc2.canvas.height)
                this.position.y -= L09_Classes.crc2.canvas.height;
            if (this.position.x > L09_Classes.crc2.canvas.width)
                this.position.x -= L09_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Classes.crc2.canvas.height;
            if (this.position.x < 0)
                this.position.x += L09_Classes.crc2.canvas.width;
        }
        draw() {
            //console.log("Snowflake draw");
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.scale(this.size, this.size);
            L09_Classes.crc2.arc(0, 0, this.size, 0, 2 * Math.PI);
            L09_Classes.crc2.fillStyle = "white";
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
        }
    }
    L09_Classes.Snowflake = Snowflake;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Snowflake.js.map