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

/* customer = {
  name: 'Anna'
}; */
/*
* Error: Type '{ name: string; }' is not assignable to type 'IUser'.
* Property 'age' is missing in type '{ name: string; }'.
*/

class shape {
    private _x:number;
    private _y:number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }
     toString(): string{
        return `x:${this.x},y:${this.y} `;
    }
}
interface i {
    area():number;
}
//
class rect extends shape implements i{
    public width:number;
    public height:number;

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width*this.height;
    }

}
const rec=new rect(2,3,4,5);
document.body.innerHTML=rec.area();
// document.body.innerHTML=rec.toString();
//
// const rect = new Rect(5, 5, 10, 20);
// console.log(rect.toString());
// console.log(rect.area());