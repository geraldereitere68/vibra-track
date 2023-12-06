/* 
   Filename: advancedInventoryManagement.js
   Content: Advanced Inventory Management System
*/

// Define the Product class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalValue() {
    return this.price * this.quantity;
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity;
  }
}

// Define the Inventory class
class Inventory {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.findIndex((p) => p.name === product.name);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  calculateInventoryValue() {
    let totalValue = 0;
    for (const product of this.products) {
      totalValue += product.calculateTotalValue();
    }
    return totalValue;
  }
}

// Create instances of Product
const laptop = new Product("Laptop", 1200, 10);
const smartphone = new Product("Smartphone", 800, 20);
const headphones = new Product("Headphones", 100, 50);

// Create instance of Inventory
const inventory = new Inventory();

// Add products to inventory
inventory.addProduct(laptop);
inventory.addProduct(smartphone);
inventory.addProduct(headphones);

// Update product quantities
laptop.updateQuantity(5);
smartphone.updateQuantity(15);
headphones.updateQuantity(40);

// Remove a product from inventory
inventory.removeProduct(smartphone);

// Output total value of inventory
console.log("Total inventory value:", inventory.calculateInventoryValue());

// Additional advanced features can be added below:
// - Search for a specific product in the inventory
// - Sort products by price or quantity
// - Generate reports or statistics based on inventory data
// - Implement user interface for interacting with the inventory system

// ... (add more code as needed)