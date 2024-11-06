
    class Employee {
        name: string;
        age: number;
        _salary: number = 0;
        _bonus: number = 0;
        tasks: Array<string>;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
            this.tasks = [];
        }

        get salary() {
            return this._salary;
        }
        set salary(value) {
            this._salary = value;
        }

        get bonus() {
            return this._bonus;
        }
        set bonus(value) {
            this._bonus = value;
        }
        work() {
            let current: string | undefined = this.tasks.shift();
            if (current) {
                this.tasks.push(current);
            }
            console.log(current);
            return;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.bonus} this month.`)
            return
        }

    }

    class Junior extends Employee {
        constructor(name: string, age: number) {
            super(name, age)
            this.tasks.push(`${this.name} is working on a simple task.`)
        }
    }


    class Senior extends Employee {
        constructor(name: string, age: number) {
            super(name, age)
            this.tasks.push(`${this.name} is working on a complicates task.`)
            this.tasks.push(`${this.name} is taking time off work.`)
            this.tasks.push(`${this.name} is supervising junior workers.`)
        }
    }

    class Manager extends Employee {
        _divident: number = 0;
        constructor(name: string, age: number) {
            super(name, age)
            this._divident = 0;
            this.tasks.push(`${this.name} is scheduling a meeting`)
            this.tasks.push(`${this.name} is preparing for a quarterly report.`)
        }

        get divident() {
            return this._divident;
        }
        set divident(value) {
            this._divident = value;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.bonus + this.divident} this month.`)
            return
        }
    }



    let dancho = new Senior('Dancho', 22);
    let shefche = new Manager('Pepi', 45);
    dancho.work();
    dancho.work();
    dancho.salary = 1200;
    dancho.bonus = 200;

    shefche.divident = 1200;
    shefche.bonus = 2000;

    dancho.collectSalary();
    shefche.collectSalary();




