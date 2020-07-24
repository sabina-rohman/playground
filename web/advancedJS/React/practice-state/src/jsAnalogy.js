class App {
    constructor(){
        this.state = {studentList: [{name: 'Mons', age:20},
                        {name: 'Sab', age:22}]}
    }
    render(){
        console.log('I am App.js');
        const schoolUI = new Vidyalay(this.state.studentList)
        schoolUI.render()
    }
}

class Vidyalay {
    constructor(studentList) {
        this.studentList = studentList;
    }

    render(){
        console.log('I am in Vidyalay');
        this.studentList.forEach(student => {
            const studentUI = new Chatro(student.name, student.age)
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
        console.log(`Mera naam ${this.naam}, mera boysh ${this.boyosh}`);
    }
}

const newApp = new App()
newApp.render();