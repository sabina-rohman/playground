class App {
    constructor(){
         this.state = {animalList: [{name:'Lion', age: 3}, {name: 'Hippo', age:7}]};
    }
    
    render(){
        const chiriyaKhana = new Zoo(this.state.animalList);
        chiriyaKhana.render()
    }
}

class Zoo {
    constructor(animals){
        this.animals = animals
    }

    render(){
        this.animals.forEach(animalData => {
            const janwar = new Animal(animalData.name, animalData.age);
            janwar.render();
        });
    }
}

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    render(){
        console.log(`Name of animal is ${this.name} and age is ${this.age}`);
    }
}

const a = new App();
a.render();
a.state.animalList.push({name: 'Camel', age:10})
a.render();