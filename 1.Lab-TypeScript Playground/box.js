var Box = /** @class */ (function () {
    function Box() {
        this.items = [];
    }
    Box.prototype.add = function (item) {
        this.items.push(item);
    };
    Box.prototype.remove = function () {
        this.items.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
var box = new Box();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
