import { Like, User } from "@prisma/client";

export interface ILikeRepository {
    register(userId: number): Promise<Like | void>
    getLikes(): Promise<User[]>
}
