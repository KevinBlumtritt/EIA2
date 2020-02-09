"use strict";
var L11;
(function (L11) {
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
        /* random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength = Math.random() * (_maxLength - _minLength);

          
            this.scale(length);
        } */
        static getDifference(_v1, _v2) {
            return new Vector(_v1.x - _v2.x, _v1.y - _v2.y);
        }
        get length() {
            return Math.hypot(this.x, this.y);
        }
    }
    L11.Vector = Vector;
})(L11 || (L11 = {}));
//# sourceMappingURL=Vector.js.map