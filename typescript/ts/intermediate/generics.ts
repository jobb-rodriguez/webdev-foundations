function identity<Type>(arg: Type): Type {
    return arg;
}

// explicit
let outputString = identity<string>("myString");
let outputNumber = identity<number>(9);
// type inference
let outputStringInference = identity("myString");

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length);
    return arg;
}

let codeLogger = loggingIdentity<number>([1, 2, 3]);
let reportLogger = loggingIdentity<string>(["CRITICAL", "CRITICAL"]);

// interfaces
interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = identity;