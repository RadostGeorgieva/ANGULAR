function tickets(arr, sorting) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
        return Ticket;
    }());
    var array = [];
    for (var i = 0; i <= arr.length - 1; i++) {
        var _a = arr[i].split("|"), destination = _a[0], price = _a[1], status_1 = _a[2];
        var ticket = new Ticket(destination, Number(price), status_1);
        array.push(ticket);
    }
    array.sort(function (a, b) {
        var valA = a[sorting];
        var valB = b[sorting];
        if (typeof (valA) == "number" && typeof (valB) == "number") {
            console.log(valA);
            console.log(valB);
            return valA - valB;
        }
        else {
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
], 'status');
