function smallest2Numbers(arr) {

    let result = arr.sort((a, b) => a - b);
    return `${result[0]} ${result[1]}`;

}

console.log(smallest2Numbers([30, 15, 50, 5]));
console.log(smallest2Numbers([3, 0, 10, 4, 7, 3]));