export default class Square {
    width: number;
    constructor(width: number){
        this.width = width;
    }
    area() {
        return this.width ** 2;
    }
};