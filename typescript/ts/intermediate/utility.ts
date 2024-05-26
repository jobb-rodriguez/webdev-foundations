// Awaited<Type> - unwrap Promises
type S = Awaited<Promise<string>>; // type S = string
 
type B = Awaited<Promise<Promise<number>>>; // type B = number
 
type C = Awaited<boolean | Promise<number>>; // type C = number | boolean

// Partial<Type> - set optional
interface Todo {
    title: string;
    description: string;
  }
   
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

  
// Pick<Type, Keys> - Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;
 
// const todo: TodoPreview

// Omit<Type, Keys> - Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). The opposite of Pick.
interface TodoOmit {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreviewOmit = Omit<TodoOmit, "description">;
 
const todoOmit: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todoOmit;
 
// const todo: TodoPreview
 
type TodoInfo = Omit<TodoOmit, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
todoInfo;
   
// const todoInfo: TodoInfo

// Required<Type> - set to required
interface Props {
    a?: number;
    b?: string;
  }
   
const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 };

// ReturnType<Type> - Constructs a type consisting of the return type of function Type.
declare function f1(): { a: number; b: string };
 
type T0 = ReturnType<() => string>;
     
// type T0 = string
type T1 = ReturnType<(s: string) => void>;
     
// type T1 = void
type T2 = ReturnType<<T>() => T>;
     
// type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
// type T3 = number[]
type T4 = ReturnType<typeof f1>;
     
/* type T4 = {
    a: number;
    b: string;
}*/
type T5 = ReturnType<any>;
     
// type T5 = any
type T6 = ReturnType<never>;
     
// type T6 = never
type T7 = ReturnType<string>;
// Type 'string' does not satisfy the constraint '(...args: any) => any'.
     
// type T7 = any
type T8 = ReturnType<Function>;
/* Type 'Function' does not satisfy the constraint '(...args: any) => any'.
  Type 'Function' provides no match for the signature '(...args: any): any'.
*/
  
// type T8 = any

// Record<Keys, Type> - Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

interface CatInfo {
    age: number;
    breed: string;
  }
   
  type CatName = "miffy" | "boris" | "mordred";
   
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };
   
  cats.boris;
   
  // const cats: Record<CatName, CatInfo>