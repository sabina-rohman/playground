class App {
    constructor(){
        this.state = {pateinData: [{name: 'KK Menon', diseases: ['Migraine', 'Dirreahoe']}, {name: 'Rajkumar Rao', diseases: ['Loose Motion', 'Constipation']}]}
    }

    render(){
        console.log('From App!');
        const hospital = new Hospital(this.state.pateinData);
        hospital.render();
    }
}

class Hospital {
    constructor(hospital){
        this.hospital = hospital;
    }

    render(){
        console.log('From Hospital:');
        this.hospital.forEach(function(pateintData){
            const pateint = new Pateint(pateintData.name, pateintData.diseases);
            pateint.render()
        })
    }
}

class Pateint {
    constructor(name, listOfDiseases){
        this.name = name;
        this.listOfDiseases = listOfDiseases
    }

    render(){
        console.log(`Name of pateint is ${this.name}`);
        console.log('List of diseases:');
        let counter = 1
        this.listOfDiseases.forEach(function(disease){
            console.log(`${counter++} : ${disease}`);
        })
    }
}

const c = new App();
c.render()