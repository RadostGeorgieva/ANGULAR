
abstract class Melon {
    weight: number;
    melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    _elementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex() {
        return this._elementIndex;
    }

    toString() {
        return `Element: Water` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`
    }
}

class Firemelon extends Melon {
    _elementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex() {
        return this._elementIndex;
    }

    toString() {
        return `Element: Fire` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`
    }
}

class Earthmelon extends Melon {
    _elementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex() {
        return this._elementIndex;
    }

    toString() {
        return `Element: Earth` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`
    }
}

class Airmelon extends Melon {
    _elementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex() {
        return this._elementIndex;
    }

    toString() {
        return `Element: Air` + '\n' + `Sort: ${this.melonSort}` + '\n' + `Element Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Melon {
    order: number;
    _elementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
        this.order = 0;
    }

    get elementIndex() {
        return this._elementIndex;
    }


    orderCheck() {
      
        if(this.order >=3){
            this.order = 0;
        }
        else {
            this.order++;
        }
        return this.order;
    }
    morph() {
        let currentOrder = this.order;
        this.orderCheck();
        
        if (currentOrder == 0) {
            const current: Melon = new Firemelon(this.weight, this.melonSort);
            return current.toString();
        } else if (currentOrder == 1) {
            const current: Melon = new Earthmelon(this.weight, this.melonSort);
            return current.toString();
        }else if (currentOrder == 2) {
            const current: Melon = new Airmelon(this.weight, this.melonSort);
            return current.toString();
        }else if (currentOrder == 3) {
            const current: Melon = new Watermelon(this.weight, this.melonSort);
            return current.toString();
        }

    }


}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
let airmelon: Airmelon = new Airmelon(5, "small");
let morphoMelon: Melolemonmelon = new Melolemonmelon(15, "small");


console.log(morphoMelon.morph());
console.log("`````````````````````");

console.log(morphoMelon.morph());
console.log("`````````````````````");
console.log(morphoMelon.morph());
console.log("`````````````````````");
console.log(morphoMelon.morph());
console.log("`````````````````````");
console.log(morphoMelon.morph());
console.log("`````````````````````");
console.log(morphoMelon.morph());
console.log("`````````````````````");