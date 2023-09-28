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

/*
Student -> CompSciStudent
        -> BusniessStudent
*/
// Inheritance: extends
class CompSciStudent extends Student {
    constructor(name, program) {
        super(name, program);
    }
    // Polymorphism: Method Overriding
    shareDream() {
        console.log('My dream is to create social impact with technology!')
    }
}
class BusinessStudent extends Student {
    constructor(name, program) {
        super(name, program);
    }
    // Polymorphism: Method Overriding
    shareDream() {
        console.log('My dream is to create social impact with businesses!')
    }
}

// Abstraction: Hides the complexity and shows only the functionality
const luis = new Student("Luis", "English Studies");
const luffy = new Student("Luffy", "Pirate");
const angelo = new CompSciStudent("Angelo", "Information Technology");
const nami = new BusinessStudent("Nami", "Navigator");

console.log(luis.name);
luis.introduce();
luffy.introduce();
angelo.introduce();

luis.shareDream();
angelo.shareDream();
nami.shareDream();
