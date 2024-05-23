type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
   
type FeatureOptions = OptionsFlags<Features>;
             
/* type FeatureOptions = {
      darkMode: boolean;
      newUserProfile: boolean;
} */

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};
   
type LockedAccount = {
    readonly id: string;
    readonly name: string;
};
   
type UnlockedAccount = CreateMutable<LockedAccount>;
             
/* type UnlockedAccount = {
      id: string;
      name: string;
} */

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };
   
  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
   
type User = Concrete<MaybeUser>;
        
/* type User = {
      id: string;
      name: string;
      age: number;
} */

// KEY REMAPPING
/* type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
} */

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface PersonX {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<PersonX>;
         
/* type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
} */

// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
           
/* type KindlessCircle = {
    radius: number;
} */