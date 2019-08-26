// interface IUser {
//     name: string;
//     age: number
// }
//
// let customer: IUser = {
//     name: 'Bob',
//     age: 50
// };
//
// console.log(customer);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* customer = {
  name: 'Anna'
}; */
/*
* Error: Type '{ name: string; }' is not assignable to type 'IUser'.
* Property 'age' is missing in type '{ name: string; }'.
*/
var shape = /** @class */ (function () {
    function shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    shape.prototype.toString = function () {
        return "x:" + this.x + ",y:" + this.y + " ";
    };
    return shape;
}());
//
var rect = /** @class */ (function (_super) {
    __extends(rect, _super);
    function rect(x, y, width, height) {
        var _this = _super.call(this, x, y) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    rect.prototype.area = function () {
        return this.width * this.height;
    };
    return rect;
}(shape));
var rec = new rect(2, 3, 4, 5);
document.body.innerHTML = rec.area();
// document.body.innerHTML=rec.toString();
//
// const rect = new Rect(5, 5, 10, 20);
// console.log(rect.toString());
// console.log(rect.area());
