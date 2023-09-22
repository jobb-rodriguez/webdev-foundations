// Instantiation
class Student {
    // Encapsulation: Variables and Methods inside a Class
    constructor(name, program) {
        this.name = name;
        this.program = program;
    }

    introduce() {
        console.log(`Hi! I'm ${this.name} taking up ${this.program}`);
    }

    shareDream() {
        console.log('My dream is to create social impact with my program!')
    }
}

// Inhertiance: extends
class CompSciStudent extends Student {
    constructor(name, program) {
        super(name, program);
    }
    // Polymorphism: Method Overriding
    shareDream() {
        console.log('My dream is to create social impact with technology!')
    }
}

// Abstraction: Hides the complexity and shows only the functionality
const luis = new Student("Luis", "English Studies");
const angelo = new CompSciStudent("Antonio", "Information Technology");

luis.introduce();
angelo.introduce();

luis.shareDream();
angelo.shareDream();
