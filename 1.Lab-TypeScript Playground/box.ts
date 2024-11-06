class Box<T> {
    private items: T[] = [];

    add(item: T) {
        this.items.push(item);
    }
    remove() {
        this.items.pop();
    }
    get count(): number {
        return this.items.length;
    }
}

let box = new Box<String>();

box.add("Pesho");

box.add("Gosho");

console.log(box.count);
box.remove(); console.log(box.count);