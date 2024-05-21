import { User } from "@prisma/client";
import { IRegisterUserDTO } from "../infra/db/prisma/repositories/UserRepository";
import { IUser } from "../useCases/UpdateUserUseCase";

export interface IUserRepository {
    register(data: IRegisterUserDTO): Promise<User>
    setInfos(data: IUser, id: number): Promise<User>
    getUser(filters: any): Promise<User | null>
    getUserByEmail(email: string): Promise<User | null>
}
