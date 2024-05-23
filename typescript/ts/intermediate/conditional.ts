interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

// SYNTAX: SomeType extends OtherType ? TrueType : FalseType;
type Example1 = Dog extends Animal ? number : string; // type Example1 = number
   
type Example2 = RegExp extends Animal ? number : string; // type Example2 = string

// INEFFICIENT SOLUTION
interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }

/*
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented";
}*/

// EFFICIENT SOLUTION
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
  }
   
let a = createLabel("typescript"); // let a: NameLabel

let b = createLabel(2.8); // let b: IdLabel

let c = createLabel(Math.random() ? "hello" : 42); // let c: NameLabel | IdLabel

// Conditional Type Constraints - never
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
interface Dog {
  bark(): void;
}
 
type EmailMessageContents = MessageOf<Email>; // type EmailMessageContents = string
 
type DogMessageContents = MessageOf<Dog>; // type DogMessageContents = never

// Inferring within conditional types
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num = GetReturnType<() => number>; // type Num = number
 
type Str = GetReturnType<(x: string) => string>; // type Str = string
 
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // type Bools = boolean[]