var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Object.defineProperty(Watermelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Watermelon.prototype.toString = function () {
        return "Element: Water" + '\n' + "Sort: ".concat(this.melonSort) + '\n' + "Element Index: ".concat(this.elementIndex);
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Object.defineProperty(Firemelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Firemelon.prototype.toString = function () {
        return "Element: Fire" + '\n' + "Sort: ".concat(this.melonSort) + '\n' + "Element Index: ".concat(this.elementIndex);
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Object.defineProperty(Earthmelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Earthmelon.prototype.toString = function () {
        return "Element: Earth" + '\n' + "Sort: ".concat(this.melonSort) + '\n' + "Element Index: ".concat(this.elementIndex);
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Object.defineProperty(Airmelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Airmelon.prototype.toString = function () {
        return "Element: Air" + '\n' + "Sort: ".concat(this.melonSort) + '\n' + "Element Index: ".concat(this.elementIndex);
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        _this.order = 0;
        return _this;
    }
    Object.defineProperty(Melolemonmelon.prototype, "elementIndex", {
        get: function () {
            return this._elementIndex;
        },
        enumerable: false,
        configurable: true
    });
    Melolemonmelon.prototype.orderCheck = function () {
        if (this.order >= 3) {
            this.order = 0;
        }
        else {
            this.order++;
        }
        return this.order;
    };
    Melolemonmelon.prototype.morph = function () {
        var currentOrder = this.order;
        this.orderCheck();
        if (currentOrder == 0) {
            var current = new Firemelon(this.weight, this.melonSort);
            return current.toString();
        }
        else if (currentOrder == 1) {
            var current = new Earthmelon(this.weight, this.melonSort);
            return current.toString();
        }
        else if (currentOrder == 2) {
            var current = new Airmelon(this.weight, this.melonSort);
            return current.toString();
        }
        else if (currentOrder == 3) {
            var current = new Watermelon(this.weight, this.melonSort);
            return current.toString();
        }
    };
    return Melolemonmelon;
}(Melon));
var watermelon = new Watermelon(12.5, "Kingsize");
var airmelon = new Airmelon(5, "small");
var morphoMelon = new Melolemonmelon(15, "small");
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
