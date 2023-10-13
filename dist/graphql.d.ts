export declare class CreateUserInput {
    name: string;
    phone: string;
}
export declare class UpdateUserInput {
    name?: Nullable<string>;
    phone?: Nullable<string>;
}
export declare class User {
    id: string;
    name: string;
    phone: string;
}
export declare abstract class IQuery {
    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;
    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}
type Nullable<T> = T | null;
export {};
