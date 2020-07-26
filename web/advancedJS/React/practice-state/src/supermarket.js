class App {
    constructor(){
        this.state = {supermarketItems: [{name: 'Salmon', price: 3.99 }, {name: 'Watermelon', price: 2.59}, {name: 'Lemon', price: 1.25}]}
    }

    render() {
        const supermarket = new Supermarket(this.state.supermarketItems);
        supermarket.render();
    }
}

class Supermarket {
    constructor(supermarket) {
        this.supermarket = supermarket
    }

    render() {
        this.supermarket.forEach(groceryData => {
            const newGrocery = new Grocery(groceryData.name, groceryData.price);
            newGrocery.render()
        });
    }
}

class Grocery {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    render(){
        console.log(`The grocery ${this.name} costs £${this.price}`)
    }
}

const z = new App();
z.render()