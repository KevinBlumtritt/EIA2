namespace L11{
    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        } 

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        /* random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength = Math.random() * (_maxLength - _minLength);

          
            this.scale(length);
        } */

        static getDifference(_v1: Vector, _v2: Vector): Vector {
            return new Vector(_v1.x - _v2.x, _v1.y - _v2.y);
        }

        get length(): number{
            return Math.hypot(this.x, this.y);
        }
    }
}