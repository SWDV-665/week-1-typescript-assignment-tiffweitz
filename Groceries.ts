class Grocery{
    name: string;
    quantity: number;
    price: number;
    department: string;

    constructor(_name: string, _quantity: number, _price: number, _department: string){
        this.name = _name;
        this.quantity = _quantity;
        this.price = _price
        this.department = _department;
    }
}

let creamer = new Grocery("Creamer", 1, 5.25, "Dairy");
let digiorno = new Grocery("Digiorno Pizza", 2, 6.99, "Frozen");
let blueberries = new Grocery("Blueberries", 2, 2.99, "Produce");
let bread = new Grocery("Bread", 1, 1.99, "Bakery");

let groceries: Grocery[] = [creamer, digiorno, blueberries, bread];
const element = document.getElementById("groc");
groceries.forEach( e => {
    const p = document.createElement("p");
    p.textContent = `${e.name} ------- Quantity: ${e.quantity} ------- Price: $${e.price} ------- Department: ${e.department}`;
    element.appendChild(p);
});