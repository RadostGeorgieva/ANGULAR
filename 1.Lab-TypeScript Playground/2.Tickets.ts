function tickets(arr, sorting) {
    class Ticket {
        destination: string;
        price: number;
        status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }
    let array: Ticket[] = [] ;
    for (let i = 0; i <= arr.length - 1; i++) {
        let [destination, price, status] = arr[i].split("|");
        let ticket = new Ticket(destination, Number(price), status);
        array.push(ticket);
    }

    array.sort((a:Ticket, b:Ticket)=> {
        const valA = a[sorting];
        const valB = b[sorting];

        if(typeof(valA) == "number" && typeof(valB) == "number") {
            console.log(valA);
            console.log(valB);
            
            return valA - valB;
        } else {
            return String(valA).localeCompare(String(valB));

        }
    });
    console.log(array);
}

tickets([

    'Philadelphia|94.20|available',
    
    'New York City|95.99|available',
    
    'New York City|95.99|sold',
    
    'Boston|126.20|departed'
    
    ],
    
    'status')