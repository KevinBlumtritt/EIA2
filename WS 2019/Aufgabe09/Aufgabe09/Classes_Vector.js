"use strict";
var L09_Classes;
(function (L09_Classes) {
    class Vector {
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_minLength, _maxLength) {
            let length = _minLength = Math.random() * (_maxLength - _minLength);
            this.scale(length);
        }
    }
    L09_Classes.Vector = Vector;
})(L09_Classes || (L09_Classes = {}));
//# sourceMappingURL=Classes_Vector.js.map