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
function solve() {
    var Employee = /** @class */ (function () {
        function Employee(name, age) {
            this._salary = 0;
            this._bonus = 0;
            this.name = name;
            this.age = age;
            this.tasks = [];
        }
        Object.defineProperty(Employee.prototype, "salary", {
            get: function () {
                return this._salary;
            },
            set: function (value) {
                this._salary = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "bonus", {
            get: function () {
                return this._bonus;
            },
            set: function (value) {
                this._bonus = value;
            },
            enumerable: false,
            configurable: true
        });
        Employee.prototype.work = function () {
            var current = this.tasks.shift();
            if (current) {
                this.tasks.push(current);
            }
            console.log(current);
            return;
        };
        Employee.prototype.collectSalary = function () {
            console.log("".concat(this.name, " received ").concat(this.salary + this.bonus, " this month."));
            return;
        };
        return Employee;
    }());
    var Junior = /** @class */ (function (_super) {
        __extends(Junior, _super);
        function Junior(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.tasks.push("".concat(_this.name, " is working on a simple task."));
            return _this;
        }
        return Junior;
    }(Employee));
    var Senior = /** @class */ (function (_super) {
        __extends(Senior, _super);
        function Senior(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this.tasks.push("".concat(_this.name, " is working on a complicates task."));
            _this.tasks.push("".concat(_this.name, " is taking time off work."));
            _this.tasks.push("".concat(_this.name, " is supervising junior workers."));
            return _this;
        }
        return Senior;
    }(Employee));
    var Manager = /** @class */ (function (_super) {
        __extends(Manager, _super);
        function Manager(name, age) {
            var _this = _super.call(this, name, age) || this;
            _this._divident = 0;
            _this._divident = 0;
            _this.tasks.push("".concat(_this.name, " is scheduling a meeting"));
            _this.tasks.push("".concat(_this.name, " is preparing for a quarterly report."));
            return _this;
        }
        Object.defineProperty(Manager.prototype, "divident", {
            get: function () {
                return this._divident;
            },
            set: function (value) {
                this._divident = value;
            },
            enumerable: false,
            configurable: true
        });
        Manager.prototype.collectSalary = function () {
            console.log("".concat(this.name, " received ").concat(this.salary + this.bonus + this.divident, " this month."));
            return;
        };
        return Manager;
    }(Employee));
    var dancho = new Senior('Dancho', 22);
    var shefche = new Manager('Pepi', 45);
    dancho.work();
    dancho.work();
    dancho.salary = 1200;
    dancho.bonus = 200;
    shefche.divident = 1200;
    shefche.bonus = 2000;
    dancho.collectSalary();
    shefche.collectSalary();
}
solve();
