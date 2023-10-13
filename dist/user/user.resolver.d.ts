import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserInput: CreateUserInput): import("../graphql").User;
    findAll(): string;
    findOne(id: number): string;
    update(updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
