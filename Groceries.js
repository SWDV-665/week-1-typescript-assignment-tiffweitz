var Grocery = /** @class */ (function () {
    function Grocery(_name, _quantity, _price, _department) {
        this.name = _name;
        this.quantity = _quantity;
        this.price = _price;
        this.department = _department;
    }
    return Grocery;
}());
var creamer = new Grocery("Creamer", 1, 5.25, "Dairy");
var digiorno = new Grocery("Digiorno Pizza", 2, 6.99, "Frozen");
var blueberries = new Grocery("Blueberries", 2, 2.99, "Produce");
var bread = new Grocery("Bread", 1, 1.99, "Bakery");
var groceries = [creamer, digiorno, blueberries, bread];
var element = document.getElementById("groc");
groceries.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "".concat(e.name, " ------- Quantity: ").concat(e.quantity, " ------- Price: $").concat(e.price, " ------- Department: ").concat(e.department);
    element.appendChild(p);
});
