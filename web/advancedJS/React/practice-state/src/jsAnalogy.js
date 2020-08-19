class App {
    constructor(){
        this.state = {studentList: [{name: 'Mons', age:20},
                        {name: 'Sab', age:22}]}
    }
    render(){
        console.log('<Rendering App>');
        const schoolUI = new Vidyalay(this.state.studentList)
        schoolUI.render()
    }
}

class Vidyalay {
    constructor(chatros) {
        this.chatros = chatros;
    }

    render(){
        console.log('<Rendering Vidyalay>');
        this.chatros.forEach(chatra => {
            const studentUI = new Chatro(chatra.name, chatra.age)
            studentUI.render()
        });
    }
}

class Chatro {
    constructor(naam, boyosh){
        this.naam = naam;
        this.boyosh = boyosh
    }

    render(){
        console.log('<Rendering Chatro>');
        console.log(`### >> Mera naam ${this.naam} \t, mera boysh ${this.boyosh}`);
    }
}


console.log('========================================')

const newApp = new App()
newApp.render();

console.log('========================================')

newApp.state.studentList.push({name: 'Aydu', age:8})
newApp.render();

console.log('========================================')