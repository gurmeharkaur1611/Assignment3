// Display student name and ID dynamically
window.addEventListener('DOMContentLoaded', () => {
    const studentDetails = document.getElementById('studentDetails');
    studentDetails.textContent = "Student: Gurmehar Kaur | Student ID: 200596150"; 
});

// Pizza class to store order details
class PizzaOrder {
    constructor(customerFullName, pizzaSize, crustStyle, toppings, dips, specialInstructions, price) {
        this.customerFullName = customerFullName;
        this.pizzaSize = pizzaSize;
        this.crustStyle = crustStyle;
        this.toppings = toppings;
        this.dips = dips;
        this.specialInstructions = specialInstructions;
        this.price = price;
    }

    // Method to return pizza description
    getPizzaDescription() {
        let description = `${this.customerFullName}'s Pizza Order:`;
        description += `\nSize: ${this.pizzaSize}`;
        description += `\nCrust: ${this.crustStyle}`;
        description += `\nToppings: ${this.toppings.join(', ')}`;
        description += `\nDips: ${this.dips.join(', ') || "None"}`;
        description += `\nSpecial Instructions: ${this.specialInstructions || "None"}`;
        description += `\nTotal Price: $${this.price}`;
        return description;
    }
}

// Handle the order button click event
document.getElementById('submitOrderButton').addEventListener('click', () => {
    const customerFullName = document.getElementById('customerFullName').value;
    const pizzaSize = document.getElementById('pizzaSize').value;
    const crustStyle = document.getElementById('crustStyle').value;
    const toppings = [];
    if (document.getElementById('cheeseTopping').checked) toppings.push('Cheese');
    if (document.getElementById('pepperoniTopping').checked) toppings.push('Pepperoni');
    if (document.getElementById('mushroomTopping').checked) toppings.push('Mushrooms');
    if (document.getElementById('oliveTopping').checked) toppings.push('Olives');
    if (document.getElementById('baconTopping').checked) toppings.push('Bacon');
    if (document.getElementById('pineappleTopping').checked) toppings.push('Pineapple');
    if (document.getElementById('greenPepperTopping').checked) toppings.push('Green Peppers');

    const dips = [];
    if (document.getElementById('garlicDip').checked) dips.push('Garlic Sauce');
    if (document.getElementById('bbqDip').checked) dips.push('BBQ Sauce');
    
    const specialInstructions = document.getElementById('specialInstructions').value;

    // Validate customer name (only alphabets)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!customerFullName || !nameRegex.test(customerFullName)) {
        alert("Please enter a valid name (letters only).");
        return;
    }

    // Validate form fields
    if (!pizzaSize || !crustStyle) {
        alert("Please fill in all required fields.");
        return;
    }

    // Calculate price
    let price = 0;
    switch (pizzaSize) {
        case 'small':
            price = 10;
            break;
        case 'medium':
            price = 12;
            break;
        case 'large':
            price = 15;
            break;
    }

    // Add $1 for each topping
    price += toppings.length;

    // Add $2 for each dip
    price += dips.length * 2;

    // Create PizzaOrder object
    const pizzaOrder = new PizzaOrder(customerFullName, pizzaSize, crustStyle, toppings, dips, specialInstructions, price);

    // Display the pizza order summary
    const orderDetails = document.getElementById('orderDetails');
    orderDetails.innerHTML = `<h2>Order Summary</h2><p>${pizzaOrder.getPizzaDescription()}</p>`;
});
