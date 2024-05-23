// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";

// Array
let pets: string[] = ["cat", "dog"];
let pets2: Array<string> = ["cat", "mouse"];

// Objects
let wizard: object = {
    a: "John"
};

// null and undefined
let meh: undefined = undefined;
let no: null = null;

// tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: string = Size[2]; // displays Medium

enum Section { News = "News", VoxAteneo = "Vox Ateneo"};
let section: string = Section["VoxAteneo"];

// Any - be careful
let whatever: any = "whatver";
whatever = 5;

// void - useful for functions
let sing = (): void => {
    console.log("lalalala");
};

// never - never returning anything and never true
let error = (): never => {
    throw Error("oops");
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // ? triggers optional
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("Fight!");
}

// type assertion
let dog = {} as RobotArmy
console.log(dog.count);

// Function - has return types
let product = (a: number, b: number): number => {
    return a * b;
}

// Union
let confused: string | number = "hello";
confused = 5;