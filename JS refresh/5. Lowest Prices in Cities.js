function solve(arr) {
    let items = {};
    for (let i = 0; i <= arr.length - 1; i++) {
        let [town, product, price] = arr[i].split(" | ");
        price = Number(price);
        if(!Object.keys(items).includes(product) || items[product].price>price) {
           items[product]={town, price}
        }
    }

       for(let product in items) {
        console.log(`${product} -> ${items[product].price} (${items[product].town})`);
        

       }
        

}
solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10'])