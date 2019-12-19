"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Bird {
        constructor(_size, _position) {
            console.log("Bird constructor");
            this.bodycolor = getRandomColor();
            this.wingcolor = getRandomColor();
            if (_position)
                this.position = _position;
            else
                this.position = new L09_Classes.Vector(Math.random() * L09_Classes.crc2.canvas.width, Math.floor(Math.random() * 250) + 20);
            this.velocity = new L09_Classes.Vector(Math.random() - 1 * 5, 0);
            //this.velocity.random(100, 200); 
        }
        move(_timeslice) {
            let offset = new L09_Classes.Vector(this.velocity.x, this.velocity.y);
            //offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.y > L09_Classes.crc2.canvas.height)
                this.position.y -= L09_Classes.crc2.canvas.height;
            if (this.position.x > L09_Classes.crc2.canvas.width)
                this.position.x -= L09_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Classes.crc2.canvas.height;
            if (this.position.x < -50)
                this.position.x += L09_Classes.crc2.canvas.width;
        }
        draw() {
            //body
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.ellipse(31, 1, 25, 15, Math.PI / 1, 0, 2 * Math.PI);
            L09_Classes.crc2.fillStyle = this.bodycolor;
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
            //head
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.arc(0, 0, 11, 0, 2 * Math.PI);
            L09_Classes.crc2.fillStyle = this.bodycolor;
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
            //eye
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.arc(-4, -2, 2, 0, 2 * Math.PI);
            L09_Classes.crc2.fillStyle = "black";
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
            //beak
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(-11, -2);
            L09_Classes.crc2.lineTo(-26, 4);
            L09_Classes.crc2.lineTo(-9, 6);
            L09_Classes.crc2.fillStyle = "gold";
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
            //wings
            L09_Classes.crc2.save();
            L09_Classes.crc2.translate(this.position.x, this.position.y);
            L09_Classes.crc2.beginPath();
            L09_Classes.crc2.moveTo(13, -4);
            L09_Classes.crc2.lineTo(30, -35);
            L09_Classes.crc2.lineTo(47, -4);
            L09_Classes.crc2.fillStyle = this.wingcolor;
            L09_Classes.crc2.fill();
            L09_Classes.crc2.restore();
            L09_Classes.crc2.closePath();
        }
    }
    L09_Classes.Bird = Bird;
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Bird.js.map